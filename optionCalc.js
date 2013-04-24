function Round6(n)
{
  X = n * 1000000;
	X= Math.round(X);
	return X / 1000000;
}


function NormDist(x) {
   var
      d1 = 0.0498673470,
      d2 = 0.0211410061,
      d3 = 0.0032776263,
      d4 = 0.0000380036,
      d5 = 0.0000488906,
      d6 = 0.0000053830;

   var a = Math.abs(x);
   var t = 1.0 + a*(d1+a*(d2+a*(d3+a*(d4+a*(d5+a*d6)))));

   t *= t;  t *= t;  t *= t;  t *= t;
   t = 1.0 / (t+t);

   if (x >= 0)  t = 1 - t;
   return t;
}

function optionCalc() 
{

var S		= parseFloat(document.getElementById("S").value.replace("\,","."));
var X		= parseFloat(document.getElementById("X").value.replace("\,","."));
var T		= parseFloat(document.getElementById("T").value.replace("\,",".")) / 365;	//
var Rf		= parseFloat(document.getElementById("Rf").value.replace("\,",".")) / 100;	//
var sigma 	= parseFloat(document.getElementById("sigma").value.replace("\,",".")) / 100;	// Volatility
var d1		= document.getElementById("d1");
var d2		= document.getElementById("d2");
var C		= document.getElementById("C");
var P		= document.getElementById("P");
var delta_C	= document.getElementById("delta_C");
var delta_P	= document.getElementById("delta_P");
var gamma	= document.getElementById("gamma");
var vega	= document.getElementById("vega");
var theta_C	= document.getElementById("theta_C");
var theta_P	= document.getElementById("theta_P");
var rho_C	= document.getElementById("rho_C");
var rho_P	= document.getElementById("rho_P");

d1.value		= Round6((Math.log (S / X) + (Rf + Math.pow(sigma, 2) / 2 ) * T) / (sigma * Math.sqrt(T)));
d2.value		= Round6(d1.value - (sigma * Math.sqrt(T)));
C.value			= Round6(S * NormDist(d1.value) - X * Math.exp( -(Rf * T)) * NormDist(d2.value));
P.value			= Round6(X * Math.exp( - (Rf * T) ) * NormDist(-d2.value) - S * NormDist(-d1.value));
delta_C.value	= Round6(NormDist(d1.value));
delta_P.value	= Round6(NormDist(d1.value) - 1);
gamma.value		= Round6((Math.exp( -(Math.pow(d1.value, 2))/2 ) / Math.sqrt( 2 * Math.PI )) / ( S * sigma * Math.sqrt(T) ));
vega.value		= Round6(S * Math.sqrt(T) * (Math.exp( -(Math.pow(d1.value, 2))/2 ) / Math.sqrt( 2 * Math.PI )) / 100);
theta_C.value	= Round6((-( S * (Math.exp( -(Math.pow(d1.value, 2))/2 ) / Math.sqrt( 2 * Math.PI )) * sigma)/(2 * Math.sqrt(T)) - Rf * X * Math.exp( -(Rf * T)) * NormDist(d2.value)) / 365);
theta_P.value	= Round6((-( S * (Math.exp( -(Math.pow(d1.value, 2))/2 ) / Math.sqrt( 2 * Math.PI )) * sigma)/(2 * Math.sqrt(T)) + Rf * X * Math.exp( -(Rf * T)) * NormDist(-d2.value)) / 365);
rho_C.value		= Round6(X * T * Math.exp( - (Rf * T) ) * NormDist(d2.value) / 100);
rho_P.value		= Round6(-X * T * Math.exp( - (Rf * T) ) * NormDist(-d2.value) / 100);

}

function resetValues(form)
{
  for(var i = 0; i < form.elements.length; i++) {
  if(form.elements[i].type == "text") { form.elements[i].value = 0;}
  }
}
