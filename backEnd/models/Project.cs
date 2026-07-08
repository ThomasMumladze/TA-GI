using System.ComponentModel.DataAnnotations;

namespace backend.models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        [Required, MaxLength(int.MaxValue)]
        public string Img { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public string Video { get; set; } = string.Empty;
        [Required, MaxLength(50)]
        public string Name { get; set; } = string.Empty;
        [Required, MaxLength(int.MaxValue)]
        public string Description { get; set; } = string.Empty;
    }
}