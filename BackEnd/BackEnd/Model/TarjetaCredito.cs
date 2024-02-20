using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace BackEnd.Model
{
    public class TarjetaCredito
    {
        [Key]
        public int Id {  get; set; }

        [Required]
        [Column(TypeName ="varchar(100)")]
        public required string Titular { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public required string NumeroTarjeta { get; set; }


        [Required]
        [Column(TypeName = "varchar(5)")]
        public required string FechaExpiracion { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public required string CVV { get; set; }
    }
}
