import javax.swing.*;
import java.awt.*;
import java.awt.Font;
import java.awt.event.*;
import java.awt.event.ActionListener;
import java.text.SimpleDateFormat.*;
import java.text.DateFormat.*;
import javax.swing.JFormattedTextField;

public class Login extends JFrame
{
	static Login lo;
	static tob1 to;
 
    JLabel userLabel ,passwordLabel;
    JTextField userTextField;
    JPasswordField  passwordField;
    JButton loginButton, resetButton,forgotButton ;
   JCheckBox showPassword;
   

 //Login Frame (Frame1)
 Login() 
{
to=new tob1();
to.setSize(800,800); to.setResizable(false);
to.setTitle("BOOKING PAGE");
Font f=new Font("harlow solid italic",Font.ITALIC,50);
ImageIcon i=new ImageIcon("bb12.jpg");
JLabel l=new JLabel("",i,JLabel.LEADING);
JLabel ll=new JLabel("Welcom To Southern Travel Agency");
ll.setForeground(new Color(0,0,253));
ll.setFont(f);
Font f1=new Font("serif",Font.BOLD,20);
userLabel = new JLabel("USERNAME");
userLabel.setFont(f1);
userLabel.setForeground(new Color(102,0,153));
passwordLabel = new JLabel("PASSWORD");
passwordLabel.setFont(f1);
passwordLabel.setForeground(new Color(102,0,153));
userTextField = new JTextField(20);
passwordField = new JPasswordField(20);
loginButton = new JButton("LOGIN");
loginButton.setFont(f1);
loginButton.setBackground(new Color(51,204,235));
resetButton = new JButton("RESET");
resetButton.setFont(f1);
resetButton.setBackground(new Color(51,204,235));
showPassword = new JCheckBox("Show Password");
showPassword.setFont(f1);
showPassword.setForeground(new Color(102,0,153));

forgotButton = new JButton("(!)Forgot");
setBackground(Color.RED);
setForeground(new Color(51,51,51));
add(ll);add(userLabel);add(userTextField);
add(passwordLabel); add(passwordField);
add(showPassword);add(loginButton);
add(resetButton);add(l);

l.setBounds(0,0,800,800);
loginButton.setBackground(Color.RED);
resetButton.setBackground(Color.RED);
forgotButton.setBackground(Color.RED);
loginButton.setForeground(Color.WHITE);
resetButton.setForeground(Color.WHITE);
		
	ll.setBounds(10, 10, 800, 60);
	userLabel.setBounds(30, 120, 130, 30);
    passwordLabel.setBounds(30, 190, 130, 30);
    userTextField.setBounds(150, 120, 170, 30);
    passwordField.setBounds(150, 190, 170, 30);
    showPassword.setBounds(150, 230, 170, 30);
    loginButton.setBounds(30, 270, 100, 30);
		
    resetButton.setBounds(200, 270, 100, 30);

	forgotButton.setBounds(200,350,100,20);
	setLayout(null);
	  
loginButton.addActionListener(new ActionListener()
{
public void actionPerformed(ActionEvent ae)
{
	 String userText;
     String pwdText;
	 String un="a";
	 String pa="a";
	 userText=userTextField.getText();
     pwdText=passwordField.getText();
     if (userText.equalsIgnoreCase(un) && pwdText.equalsIgnoreCase(pa)) 
	{
    JOptionPane.showMessageDialog(lo, "Login Successful");
	lo.setBackground(Color.RED);
	to.setVisible(true);
	lo.setVisible(false);
	}
	else
	{
     JOptionPane.showMessageDialog(lo, "Invalid Username or Password");
      }
	}
	});
resetButton.addActionListener(new ActionListener()
{
public void actionPerformed(ActionEvent ae)
{
	 userTextField.setText("");
     passwordField.setText("");
}
});
showPassword.addActionListener(new ActionListener()
{
public void actionPerformed(ActionEvent ae)
{
passwordField.setEchoChar((char) 0);

 }
});
}


//Main Method Declaration
	public static void main(String[] args) {
      lo = new Login();
      lo.setTitle("Login Form");
	  lo.setBackground(Color.RED);
      lo.setVisible(true);
	  lo.setSize(800,800);
	  lo.setResizable(false);
      lo.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

	//Tabbed Pane Class(Frame 2)
class tob1 extends JFrame
{
public tob1()
{
Container c=getContentPane();
JTabbedPane tp=new JTabbedPane();
tp.setBackground(Color.RED);
tp.setForeground(Color.BLUE);

tp.addTab("BOOK",new bookPanel());
tp.addTab("NEW LOGIN",new logPanel());
tp.addTab("About Us",new wPanel());

c.add(tp);
setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
}



class wPanel extends JPanel 
{
public wPanel()
	{
	setLayout(null);
ImageIcon ia=new ImageIcon("abo.jpg");
JLabel li=new JLabel("",ia,JLabel.LEADING);



	Font hf=new Font("times new roman",Font.BOLD,40);
	JLabel lk1=new JLabel(" Southern Travel Agency");
	lk1.setFont(hf);
	 add(lk1);

	Font hf0=new Font("times new roman",Font.BOLD,25);
	JLabel l=new JLabel("> This Travel Agency Is Started At 2-February-2021");
	l.setForeground(Color.WHITE);
	add(l);
l.setFont(hf0);

JLabel l1=new JLabel("> In This Agency Is Started By Hemanth G & Asgar ");
	add(l1);l1.setForeground(Color.WHITE);
l1.setFont(hf0);

JLabel l2=new JLabel("* Contact Us....");
l2.setForeground(Color.RED);
	add(l2);
l2.setFont(hf);

	Font hf1=new Font("times new roman",Font.BOLD,25);
JLabel l3=new JLabel("-Southern Travel Agency");
	add(l3);l3.setForeground(Color.WHITE);
l3.setFont(hf1);

JLabel l4=new JLabel("-Vinobanagar 2nd Cross");
	add(l4);l4.setForeground(Color.WHITE);
l4.setFont(hf1);

JLabel l5=new JLabel("-Shivmoga-577225");
	add(l5);l5.setForeground(Color.WHITE);
l5.setFont(hf1);

JLabel l6=new JLabel("-Email : southernbusbook@gmail.com");
	add(l6);l6.setForeground(Color.WHITE);
l6.setFont(hf1);

JLabel l7=new JLabel("-Phone :9448212692,9342475168");
	add(l7);l7.setForeground(Color.WHITE);
l7.setFont(hf1);

ImageIcon ih=new ImageIcon("hem.jpg");
JLabel l8=new JLabel("",ih,JLabel.LEADING);
	//add(l8);

ImageIcon ih1=new ImageIcon("asg.jpg");
JLabel l9=new JLabel("",ih1,JLabel.LEADING);
 //add(l9);

	Font hfq=new Font("times new roman",Font.BOLD,40);
 JLabel l10=new JLabel("* IMPORTENT NOTE....");
l10.setForeground(Color.RED);
	add(l10);
l10.setFont(hfq);

	Font hfqq=new Font("times new roman",Font.BOLD,25);

JLabel l11=new JLabel(">! In Corona Sitiation Stay Safe");
	add(l11);l11.setForeground(Color.WHITE);
l11.setFont(hfqq);

JLabel l12=new JLabel(">! Where Mask,Keep Clean");
	add(l12);l12.setForeground(Color.WHITE);l12.setFont(hfqq);

JLabel l13=new JLabel(">! Keep Your Luagage Safely");
	add(l13);l13.setForeground(Color.WHITE);l13.setFont(hfqq);

	Font xx=new Font("harlow solid italic",Font.BOLD,50);
JLabel l20=new JLabel("Thank You Wisit Again....");
l20.setForeground(Color.ORANGE);
	add(l20);
l20.setFont(xx);

	lk1.setForeground(Color.RED);
	lk1.setBackground(Color.RED);
    

	add(li);

	 lk1.setBounds(10,10,800,40);
	  l.setBounds(0,60,800,40);
	  	  l1.setBounds(0,100,800,40);

		   l2.setBounds(0,200,800,40);

		   l3.setBounds(20,230,800,40);
		    l4.setBounds(20,260,800,40);
			 l5.setBounds(20,290,800,40);

			 l6.setBounds(20,320,800,40);
		    l7.setBounds(20,350,800,40);

			l8.setBounds(500,500,400,100);
			l9.setBounds(400,500,400,100);

			l10.setBounds(0,400,700,50);
			l11.setBounds(10,440,700,40);
			l12.setBounds(10,470,700,40);
				l13.setBounds(10,500,700,40);

				l20.setBounds(10,570,700,70);

		  li.setBounds(0,0,800,800);

	}
}




//Book Tabbed Pane 
class bookPanel extends JPanel implements ActionListener
{
JTextField t1,t2,t3,t4,t5,t6,t7,t91,t8,t10;
JComboBox c1,c2,c3,c6;
JButton b1,b2;
public bookPanel()
{
ImageIcon i2=new ImageIcon("tab.jpg");
JLabel lk=new JLabel("",i2,JLabel.LEADING);
Font f3=new Font("algerian",Font.BOLD,40);
Font f=new Font("derby",Font.BOLD,20);
JLabel l1=new JLabel("Southern Travel Agency",JLabel.CENTER);
l1.setForeground(Color.RED);
l1.setFont(f3);
JLabel l2=new JLabel("Name:");
l2.setForeground(new Color(0,0,153));
l2.setFont(f);
t1=new JTextField(3);
JLabel l3=new JLabel("Phone:");
l3.setFont(f);
l3.setForeground(new Color(0,0,153));
t2=new JTextField(3);
JLabel l4=new JLabel("Email:");
l4.setFont(f);
l4.setForeground(new Color(0,0,153));
t3=new JTextField(3);
JLabel l5=new JLabel("Seat's");
l5.setFont(f);l5.setForeground(new Color(0,0,153));

t4=new JTextField(10);
JLabel l6=new JLabel("Adress:");
l6.setFont(f);l6.setForeground(new Color(0,0,153));
t5=new JTextField(3);
JLabel l7=new JLabel("From:");
l7.setFont(f);l7.setForeground(new Color(0,0,153));
c1=new JComboBox();  c1.setForeground(new Color(0,0,153));
c1.addItem("");
c1.addItem("Shivamogga");
c1.addItem("Bengalore");
c1.addItem("Mangalore");

JLabel l8=new JLabel("To:");
l8.setFont(f);l8 .setForeground(new Color(0,0,153));

 c2=new JComboBox(); c2.setForeground(new Color(0,0,153));
 c2.setForeground(Color.GREEN);
c2.addItem("");
c2.addItem("Mangalore");
c2.addItem("Bengalore");
c2.addItem("Shivmoga");

JLabel l9=new JLabel("Date:");
l9.setFont(f);l9.setForeground(new Color(0,0,153));

t8=new JFormattedTextField("dd/mm/yyyy");

JLabel l10=new JLabel("Time:");
l10.setFont(f);l10.setForeground(new Color(0,0,153));

 t91=new JFormattedTextField("hh/mm");


JLabel l11=new JLabel("Amount:");
l11.setFont(f);l11.setForeground(new Color(0,0,153));

 c3=new JComboBox();  
c3.setForeground(new Color(0,0,153));
c3.addItem(" ");
c3.addItem("Shivamogga To Benglore=308 Rupees");
c3.addItem("Benglore To Shivamogga=308 Rupees");
c3.addItem("Mangalore To Shivmogga=289 Rupees");
c3.addItem("Shivamogga To Manglore=289 Rupees");

c3.addItem("Manglore To Benglore=406 Rupees");
c3.addItem("Benglore To Manglore=406 Rupees");



JLabel l12=new JLabel("Payment Type:");
l12.setFont(f);l12.setForeground(new Color(0,0,153));

c6=new JComboBox();
c6.setForeground(new Color(0,0,153));
c6.addItem("");
c6.addItem("Googal Pay");
c6.addItem("Phone Pay");
c6.addItem("Paytm");
c6.addItem("Card");

b1=new JButton("BOOK");
b1.setBackground(Color.RED);
b1.setForeground(new Color(1,1,1));


 b2=new JButton("CLEAR");
 		b2.setBackground(Color.RED);
b2.setForeground(new Color(1,1,1));



b1.addActionListener(this); 

b2.addActionListener(this);
b1.addActionListener(this); 
b1.addActionListener(this); 




add(l1);
add(l2);add(t1);
add(l3);add(t2);
add(l4);add(t3);
add(l5);add(t4);add(l6);add(t5);
add(l7);add(c1);add(l8);add(c2);
add(l9);add(t8);add(l10);add(t91);add(l11);
add(c3);add(l12);add(c6);add(b1);add(b2);

add(lk);
lk.setBounds(0,0,800,800);
l1.setBounds(10,10,800,60);

l2.setBounds(20,80,140,20);
 t1.setBounds(140,80,170,20);

l3.setBounds(20,120,140,20);
 t2.setBounds(140,120,170,20);

 l4.setBounds(20,160,140,20);
 t3.setBounds(140,160,170,20);

l5.setBounds(20,200,140,20);
t4.setBounds(140,200,170,20);

l6.setBounds(20,240,140,20);
t5.setBounds(140,240,170,20);

l7.setBounds(20,280,140,20);
  
c1.setBounds(140,280,170,20);

l8.setBounds(20,320,140,20);
  
c2.setBounds(140,320,170,20);

l9.setBounds(20,360,140,20);
t8.setBounds(140,360,170,20);

l10.setBounds(20,400,140,20);
t91.setBounds(140,400,170,20);

l11.setBounds(20,440,140,20);
  
c3.setBounds(140,440,170,20);

l12.setBounds(20,480,140,30);
  
c6.setBounds(140,480,170,20);

b1.setBounds(20,520,140,40);
  
b2.setBounds(140,520,170,40);

setLayout(null);
		}

public void actionPerformed(ActionEvent ae)
{
	String str=ae.getActionCommand();
	if(str.equals("BOOK"))
	{
    if(t1.getText().trim().length()!=0)
	if(t2.getText().trim().length()!=0)
	if(t3.getText().trim().length()!=0)
    if(t4.getText().trim().length()!=0)
	if(t5.getText().trim().length()!=0)
	{
	JFrame f0=new JFrame();
	JOptionPane.showConfirmDialog(f0,"Name=" +t1.getText()+"\n"+
					"Phone  =   " +t2.getText()+"\n"+"Email  =" +t3.getText()+"\n"+
					"State  =" +t4.getText()
					 +"\n"+"Adress  =" +t3.getText()+"\n"+
					 "From  =" +c1.getSelectedItem()+"\n"+
					 "TO  ="+ c2.getSelectedItem()+"\n"+"Date  =" +t8.getText()+"\n"
				   +"Time=" +t91.getText()+"\n"+"Amount  ="+ c3.getSelectedItem()+"\n"
				   +"PayMent Type=  " +c6.getSelectedItem()+"\n");
					
		JFrame f=new JFrame();
		JOptionPane.showMessageDialog(f,"BOOK TICKET SUCCESSFULLY");
		JOptionPane.showMessageDialog(f,"You Booked "  +t4.getText()+"/t" +  "Tickets");
			JOptionPane.showMessageDialog(f,"Your TicketNumber IS:21");
			JOptionPane.showMessageDialog(f,"Your Ticket Send To Your  Email Please Download It ");
			JOptionPane.showMessageDialog(f,"Happy Journy");

			

		 }
            if(t2.getText().trim().length()==0 &&  t3.getText().trim().length()==0  &&  t4.getText().trim().length()==0
				&& t5.getText().trim().length()==0)
			
			{
JFrame f1=new JFrame();
f1.setBackground(Color.RED);
JOptionPane.showMessageDialog(f1,"Fill The Details Properly");




}
}
		b2.addActionListener(new ActionListener()
		{
			public void actionPerformed(ActionEvent ae)
		{
		t1.setText(" ");
		t2.setText(" ");
		t3.setText(" ");
		t4.setText(" ");
		t5.setText(" ");
		}
		});
	}
}

//New Login Creation Tabbed Pane
class logPanel extends JPanel
{
	JFrame f22;
	JTextField name,pass,pass1;
    JButton b1,b2;
	JPanel f;
public logPanel()
{
    
     f22=new JFrame();JFrame f2=new JFrame();
   	Font f10=new Font("algerian",Font.BOLD,50);
    JLabel lm=new JLabel("New  Regestration",JLabel.CENTER);
	lm.setForeground(Color.CYAN);
	lm.setFont(f10);
	Font f0=new Font("serif",Font.BOLD,30);
    Font f01=new Font("serif",Font.BOLD,30);

	ImageIcon i2=new ImageIcon("u.jpg");
    JLabel lk=new JLabel("",i2,JLabel.LEADING);
	JLabel n=new JLabel("User Name:");
	n.setFont(f01);n.setForeground( Color.WHITE);
    JLabel p=new JLabel("New-password:");
	p.setFont(f01);p.setForeground(Color.WHITE);
    name=new JTextField(20);
    pass=new JTextField(20);

	JLabel p1=new JLabel("Re-Enter-password:");
	p1.setFont(f01);p1.setForeground(Color.WHITE);
   
    pass1=new JTextField(20);

    b1=new JButton("submit");
	b1.setBackground(Color.RED);
    b2=new JButton("cancel");
	b2.setBackground(Color.RED);
	b1.addActionListener(new ActionListener()
	{
public void actionPerformed(ActionEvent ae)
{
			if(name.getText().trim().length()!=0){
			if(pass.getText().trim().length()!=0){
            JFrame f=new JFrame();
			JOptionPane.showMessageDialog(f,"Submited successfull");
						JOptionPane.showMessageDialog(f,"Your Password Will Change Within 24 Hours");

		

}
	else
		    JOptionPane.showMessageDialog(f22,"password canot be Empty");
}
	else
					 
	       	JOptionPane.showMessageDialog(f22,"name conot be empty");
}
});

b2.addActionListener(new ActionListener()
	{
public void actionPerformed(ActionEvent ae)
{
			
			lo.setVisible(true);
}
});


  add(lm);add(n); add(name);
  add(p); add(pass);  add(pass1);
  add(p1);add(b1);
  add(b2);add(lk);
  setLayout(null);
  lm.setBounds(10,10,800,60);
  n.setBounds(30,80,300,40);
  name.setBounds(300,80,180,30);
  p.setBounds(30,130,300,40);
  pass.setBounds(300,130,180,30);
  p1.setBounds(30,180,300,30);
  pass1.setBounds(300,180,180,30);
  b1.setBounds(30,230,120,40);
  b2.setBounds(230,230,140,40);
  lk.setBounds(0,0,800,800);
  

class aboutPanel extends JPanel 
{
public aboutPanel()
	{
	setBackground(Color.RED);

setBackground(Color.CYAN);
	Font hf=new Font("times new roman",Font.BOLD,30);
	JLabel lk1=new JLabel("Welcom To Southern Travel Agency");
	lk1.setFont(hf);
	lk1.setForeground(Color.BLUE);
	lk1.setBackground(Color.RED);
     add(lk1);
	 lk1.setBounds(10,10,500,40);
	}
}
}
}
}
}