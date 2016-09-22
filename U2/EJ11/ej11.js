var fecha = new Date();
var dia = fecha.getDay();

var msg = "Hoy es el dia de la semana ";
var dia;
var restantes;
switch(dia)
{
	case 0:
		dia = "domingo";
		restantes = "0";
	break;
	case 1:
		dia = "lunes";
	break;
	case 2:
		dia = "martes";
	break;
	case 3:
		dia = "miercoles";
	break;
	case 4:
		dia = "jueves";
	break;
	case 5:
		dia = "viernes";
	break;
	case 6:
		dia = "sabado";
	break;
}