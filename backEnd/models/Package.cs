using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class Package
    {
        [Key]
        public int PackageId { get; set; }
        [Required, MaxLength(75)]
        public string PackageTitle { get; set; } = string.Empty;
        [Required]
        public decimal Price { get; set; }
        [Required]
        public List<string> PackageInfo { get; set; } = new List<string>();
        public bool IsActive { get; set; } = true;
        public bool IsSale { get; set; }
        public int Discount { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}