using backend.Data;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddControllers();

// Configure PostgreSQL connection string
string connectionString;
var host = Environment.GetEnvironmentVariable("PGHOST");

if (!string.IsNullOrEmpty(host))
{
    // Railway production environment
    var port = Environment.GetEnvironmentVariable("PGPORT");
    var db = Environment.GetEnvironmentVariable("PGDATABASE");
    var user = Environment.GetEnvironmentVariable("PGUSER");
    var password = Environment.GetEnvironmentVariable("PGPASSWORD");

    connectionString = $"Host={host};Port={port};Database={db};Username={user};Password={password}";
}
else
{
    // Local development environment
    connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new InvalidOperationException("No database connection string found.");
}

builder.Services.AddDbContext<DataContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

// Apply migrations at startup
using (var scope = app.Services.CreateScope())
{
    var migration = scope.ServiceProvider.GetRequiredService<DataContext>();
    migration.Database.Migrate();
}

// Configure the app to use forwarded headers
app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto,
    KnownNetworks = { },
    KnownProxies = { }
});

app.MapOpenApi();
app.MapScalarApiReference();

app.MapControllers();
app.Run();

