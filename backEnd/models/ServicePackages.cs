using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class ServicePackages
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(50)]
        public string Name { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public List<string> AboutService { get; set; } = new List<string>();
        [Required]
        public decimal Price { get; set; }
        public bool Discount { get; set; } = false;
        public int DiscountPercentage { get; set; } = 0;
        public bool IsActive { get; set; } = true;
    }
}