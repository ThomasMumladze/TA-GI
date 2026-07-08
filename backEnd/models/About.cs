using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class About
    {
        [Key]
        public int AboutId { get; set; }
        [Required, MaxLength(int.MaxValue)]
        public string Title { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public string SubTitle { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public string Description { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public string Img { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}