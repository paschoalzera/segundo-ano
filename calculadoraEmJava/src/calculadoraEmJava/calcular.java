package calculadoraEmJava;
import java.util.Scanner;
public class calcular {
	public static void main(String[]args) {
		calculadora s = new calculadora ();
		Scanner in = new Scanner (System.in);
		System.out.println("insira os numeros para a operação ");
	      int  num = in.nextInt();  
	      soma (num);
	}
	

}
