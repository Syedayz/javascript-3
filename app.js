/*document.write("<h2>Chapter 1</h2>")

//task1
alert("Thanks for visiting")

//task2
alert("Error! Please enter a valid password")

//task3
alert("Welcome to JS Land.. \n Happy coding!")

//task4
alert("Welcome to JS Land!")
alert("Happy coding!\nPrevent this page from creating additional dialogs")

//task5
alert("Hello.. I can run JS through my web browser's console")

document.write("<h2>Chapter 2</h2>")

//task1
var username="yusra"

//task2
var MyName = "Yusra"

//task3
var message = "Hello World"
alert(message)

//task4
var name="John Doe"
var age="15 years old"
var certification="Mobile Application Development"
alert(name)
alert(age)
alert(certification)

//task5
var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

//task6
var Email="yz@gmail.com"
alert("my email is "+Email)

//task7
var book="A smarter way to learn JavaScript"
alert(book)

//task8
document.write("Yeh!I can write HTML content through javascript <br>")

//task9
var design=" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
document.write(design)
alert(design)

document.write("<h2>Chapter 3</h2>")

//task 1
var age=15
alert("i am "+age+" years old")

//task2
var time=14
alert("You have visited the site "+time+" times")

//task3
var birthyear=2000
document.write("My birth year is "+birthyear+"<br>")

//task4
var visitorname="Sadia"
var Product="soap"
var quantity=2
document.write(visitorname+" ordered "+quantity+" "+Product+" on xyz clothing store <br>")

document.write("<h2>Chapter 4</h2>")

//task1
var name="yusra",name2="sadia",_name="maham"

//task2
var Legalvariables =" name   <br>  name2  <br>   _name  <br>   my_name  <br>  useralert"
var illegalvariable=" 5name  <br> my name <br>   alert <br>   5 <br>   ^name"
document.write("legal variable :"+ Legalvariables+"<br>") 
document.write(" illegal variable :"+illegalvariable+"<br>")

//task3
var heading="Rules for naming JS variable<br>"
document.write("<h1>"+heading+"</h1><br>")
document.write("Variable names can only contain numbers, $, __ and letter <br>")
document.write("Variables must begin with a letter,underscore or $ <br>")
document.write("Variable names are case sensitive <br>")
document.write("Variable names should not be JS keywords <br>")

document.write("<h2>Chapter 5</h2>")

//task1
var a=5
var b=5
var c=a+b
document.write("The sum of 5 and 5 is "+c+"<br>")

//task2
var a=5
var b=6
var f=a-b
document.write("The answer is "+f+"<br>")

var d=a*b
document.write("The multiplication of  5 into 6 is "+d+"<br>")

var e=a%b
document.write("The modulus of 5 and 6 is "+e+"<br>")

//task3
var value
document.write("Value after variable declaration is : "+value+"<br>")
var number=5
document.write("Initial value : "+number+"<br>")
document.write("Value after increment is : ",++number+"<br>")
number=7+number
document.write("after addition is "+number+"<br>")
document.write("Value after decrement is : ",--number+"<br>")
number=number%3
document.write("The remainder is :"+number+"<br>")

//task4
var cost=600
var buy=5
document.write("The cost to buy "+buy+" tickets to a movie is "+ (buy*cost)+"PKR <br>")

//task5
document.write("Table of 3<br>")
var num=3
for(i=1; i<=10; ++i){
    v=num*i
    document.write(num+"*"+i+"="+v+"<br>")
}

//task6
var cel=25
var ferh=77
var c=(ferh-32)*5/9
var f=(cel*9/5)+32
document.write(cel+"C is "+ferh+"C<br>")
document.write(ferh+"C is "+cel+"C<br>")

//task7
var item1=650
var item2=100
var quantity1=3
var quantity2=7
var shippingcharges=100
document.write("Price of item 1 is "+item1+"<br>"+"Quantity: "+quantity1+"<br>")
document.write("Price of item 2 is "+item2+"<br>"+"Quantity: "+quantity2+"<br>")
var f=item1*quantity1
var g=item2*quantity2
document.write("The total cost is ",f+g+shippingcharges,"<br>")

//task8
var totalmarks=980
var marksobt=804
document.write("Total marks: "+totalmarks+"<br>marks obtained : "+marksobt+"<br>Percentage : "+((marksobt/totalmarks)*100+"%<br>"))

//task9
var us=10
var saudi=25
document.write("Total currency in PKR is "+((us*104.8)+(saudi*28)))

//task10
var numb=2
document.write("<br>The result is : "+((numb+5)*10)/2)

//task11
var currentyear=2016
var birthyear=1992
document.write("<br>Your age is: "+(currentyear-birthyear))

//task12
var radius=20
var circum=2*3.142*radius
var area=3.142*(radius*radius)
document.write("<br>Radius of a circle is :"+radius+"<br>The circumferense is : "+circum+"<br>The area is : "+area+"<br>")

//task13
var snack="lays"
var currentage=15
var maxage=65
var amount=3
var totalNeeded =(amount*365)*(maxage-currentage)
document.write("You will need "+totalNeeded+" "+snack+" to last you until the ripe old age of "+maxage+"<br>")

document.write("<h2>Chapter 6-9</h2>")
//task1
var arithemetic=10
document.write("The value of a is : "+arithemetic+"<br>"+"The value of ++a is : "+(++arithemetic)+"<br>Now the value of a is "+arithemetic+"<br> The value of a++ is: "+(arithemetic++)+"<br>Now the value of a is :"+arithemetic+"<br>The value of --a is : "+(--arithemetic)+"<br>Now the value of a is: "+arithemetic+"<br> The value of a-- is: "+(arithemetic--)+"<br>Now the value of a is :"+arithemetic,"<br>")

//task2
var a=2, b=1
document.write("--a : 1 <br> --a - --b : 1 <br> --a - --b + ++b : 1 - 0 + 1 <br> --a - --b + ++b + b-- : 1 - 0 + 1 + 1 <br>")
document.write(" The result is :",--a - --b + ++b + b--,"<br>")

//task3
var inputname=prompt("Enter your name ")
alert("Thanks for visiting "+inputname)

//task5
var table=prompt("Enter the number")
if(table==""){
    var defa=5
    for(i=1; i<=10; ++i){
        v=defa*i
        document.write(defa+"*"+i+"="+v+"<br>")
    }
}
else{
    for(i=1; i<=10; ++i){
        v=table*i
        document.write(table+"*"+i+"="+v+"<br>")
    }
}


//task6
document.write("<h4> Subjects &nbsp;&nbsp;&nbsp;&nbsp;Total marks &nbsp;&nbsp;&nbsp;&nbsp;Obtained marks</h4>")
var sub1=prompt("Enter subject 1")
var sub2=prompt("Enter subject 2")
var sub3=prompt("Enter subject 3" )
var score=100
totalscore=score+score+score
var sub1marks=prompt("Enter marks of subject 1")
var sub2marks=prompt("Enter marks of subject 2")
var sub3marks=prompt("Enter marks of subject 3")
var submarks=(+sub1marks)+(+sub2marks)+(+sub3marks)
var percent=submarks/totalscore
document.write(sub1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub1marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write(sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub2marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write(sub3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+score+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+sub3marks+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>")
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+totalscore+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+submarks+"<br>Percentage "+(percent*100)+" %")

document.write("<h2>Chapter 9-11</h2>")
//task1
var city=prompt("Enter your city")
if(city=="karachi"){
    alert("Welcome to the city of lights")
}

//task2
var gender=prompt("Enter your gender")
if(gender=="male"){
    alert("Good Morning Sir.")
}
else if(gender=="female"){
    alert("Good Morning Ma'am.")
}

//task3
var traffic=prompt("Enter the color of road traffic signal")
if(traffic=="red"){
    alert("Must stop")
}
else if(traffic=="yellow"){
    alert("Ready to move")
}
else if(traffic=="green"){
    alert("move now")
}

//task4
var fuel=prompt("Enter the remaining fuel in car (in litres)")
if(fuel<0.25){
    alert("Please refill the fuel in your car")

}

//task5
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//task 6
var mark1=+prompt("Enter your subject 1 marks")
var mark2=+prompt("Enter your subject 2 marks")
var mark3=+prompt("Enter your subject 3 marks")
var totalmarks1=300
var mark=mark1+mark2+mark3
var per=(mark/totalmarks1)*100
alert("Total marks :"+mark)
alert("Percentage is :"+per)
if(per>=80){
    alert("Grade : A-one \n Remarks : Excellent")
}
else if(per>=70){
    alert("Grade : A \n Remarks : Good")
}
else if(per >=60){
    alert("Grade : B \n Remarks : You need to improve")
}
else if(per<60){
    alert("Grade : Fail \n Remarks : Sorry")
}

//task7
var secret=6
var guess=+prompt("Guess the number")
if(guess==secret){
    alert("Bingo!")

}
else if(guess+1==secret){
    alert("You are close enough to guess the correct answer")
}

//task8
var number3=+prompt("Enter the number")
if(number3%3==0){
    document.write("Yes it is divisible by 3<br>")
}

//task9
var number2=+prompt("Enter the number")
if(number2%2==0){
    document.write("<br>It is even")
}
else{
    document.write("<br>It is odd")
}

//task10
var temp=+prompt("Enter the temperature")
if(temp>40){
    alert("It is too hot outside")
}
else if(temp>30){
    alert("The weather is normal")
}
else if(temp>20){
    alert("Today's weather is cool")
}
else if(temp>10){
    alert("OMG!Today's Weather is so cool")
}

//task11
var firstnum=+prompt("Enter the number")
var secondnum=+prompt("Enter the number")
var operation=prompt("Enter the operation")
if(operation=="+"){
    alert(firstnum+secondnum)
}
else if(operation=="-"){
    alert(firstnum-secondnum)
}
else if(operation=="%"){
    alert(firstnum%secondnum)
}
else if(operation=="*"){
    alert(firstnum*secondnum)
}
else if(operation=="/"){
    alert(firstnum/secondnum)
}

document.write("<h2>Chapter 12-13</h2>")
//task1

var char=prompt("Enter a number or string")
if (char>=65 && char<=90){
    alert("Character is a capital letter")
}
else if (char>=97 && char<=122){
    alert("Character is a small letter")
}
else if (char>=48 && char<=57){
    alert("Character is a digit")
}

//task2
var int=prompt("Enter the integer")
var int2=prompt("Enter the integer")
if(int>int2){
    alert("The larger one is "+int)
}
else if (int2>int){
    alert("The larger one is "+int2)
}
else{
    alert("They are euqal")
}

//task3
var integer1=prompt("Enter the integer")
if(integer1>0){
    alert("The number is positive")
}
else if (integer1<0){
    alert("The number is negative")
}
else{
    alert("It is 0")
}

//task4
var vowel=prompt("Enter the string of length 1")
if(vowel=="a"|| vowel=="e" || vowel=="i" ||vowel=="o" ||vowel=="u"){
    alert("It is vowel")
}
else{
    alert(false)
}

//task5
var pass="yz35"
var enterpass=prompt("Enter Your Password")
if(enterpass==""){
    alert("Please Enter your password")
}

else if(enterpass==pass){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}

//task6
var greeting;
var hour = 13;
if (hour < 18) {
    alert("Good day")
}
else{
    alert("Good evening")
}
document.write("<h2>Chapter 14-16</h2>")

//task1
var empty=[]

//task2

//task3
var stringarray=["yusra","shiza","asma"]

//task4
var numarray=[2,3,2,4]

//task5
var booleanarray=[true,false]

//task6
var mixearray=["yusra",5,"+",true]

//task7
var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil"]
document.write("<h4>Qualifications</h4>",edu[0],"<br>",edu[1],"<br>",edu[2],"<br>",edu[3],"<br>",edu[4],"<br>",edu[5],"<br>",edu[6])

//task8
var studentarray=["yusra","shiza","asma"]
var scorestudent=["497","498","499"]
var totalmarks1=500
document.write("<br>Score of ",studentarray[0]," is ",scorestudent[0]," and Percentage is ",(scorestudent[0]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[1]," is ", "and Percentage is ",(scorestudent[1]/totalmarks1)*100,"%<br>")
document.write("Score of ",studentarray[2]," is ", "and Percentage is ",(scorestudent[2]/totalmarks1)*100,"%<br>")

//task9
var colorarray=["blue","red","yellow"]
document.write(colorarray[0],"<br>",colorarray[1],"<br>",colorarray[2],"<br>")
var askuser=prompt("What color do you want to add in the beginning?")
colorarray.unshift(askuser)
document.write(colorarray,"<br>")
var inend=prompt("What color do you want to add in the end?")
colorarray.push(inend)
document.write(colorarray,"<br>")
var askuser1=prompt("What  more colors do you want to add in the beginning?")
var askuser2=prompt("What  more colors do you want to add in the beginning?")
colorarray.unshift(askuser1,askuser2)
document.write(colorarray,"<br>")
colorarray.shift()
document.write(colorarray,"<br>")
colorarray.pop()
document.write(colorarray,"<br>")
var askcolor=prompt("On which index do you want to add a color?")
var askcolorname=prompt("Write a color name")
colorarray.splice(askcolor,0,askcolorname)
document.write(colorarray,"<br>")
var delcolor=prompt("Which index you want to delete the color")
colorarray.splice(delcolor,1)
document.write(colorarray)


//task10
var sortscore=[32,23,54]
document.write("Score of students ",sortscore)
sortscore.sort()
document.write("<br>Ordered score of students ",sortscore,"<br>")

//task11
var cityname=["Karachi","Lahore","Islamabad","Quetta"]
var selected=[cityname[0],cityname[2]]
document.write("City names :",cityname,"<br> Selected city names: ",selected,"<br>")

//task12
var arr=["This","is","my","cat"]
document.write(arr.join(" "))

//task13
var newarr=[]
newarr.push(3)
newarr.push(5)
newarr.push(6)
document.write("<br> The array is :",newarr)
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())
document.write("<br> Values :",newarr.shift())

//task14
var newarr2=[]
newarr2.push(3)
newarr2.push(5)
newarr2.push(6)
document.write("<br> The array is :",newarr2)
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())
document.write("<br> Values: ",newarr2.pop())

//task15
var mobilemanuf=["<br>Apple","Samsung", "Motorola", "Nokia", "Sony"]
document.write(mobilemanuf)

document.write("<h2>Chapter 17-20</h2>")
//task1
var multiarr=[[],[]]

//task2
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write(matrix[0][0]," ",matrix[0][1]," ",matrix[0][2]," ",matrix[0][3],"<br>",matrix[1][0]," ",matrix[1][1]," ",matrix[1][2]," ",matrix[1][3],"<br>",matrix[2][0]," ",matrix[2][1]," ",matrix[2][2]," ",matrix[2][3],"<br>")

//task3
for(i=1;i<=10;++i){
    document.write(i,"<br>")
}

//task4
var table2=prompt("Enter the number")
var table3=prompt("Enter the length")
for(i=1; i<=table3; ++i){
    v=table2*i
    document.write(table2+"*"+i+"="+v+"<br>")
}

//task5
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
j=fruits.length-1
for(i=0;i<=j;++i){
    document.write("Element at index ",i," is ",fruits[i],"<br>")
}

//task6
document.write("Counting: ")
for (i=0;i<=10;++i){
    document.write(i,",")
}

document.write("<br>Reverse Counting: ")
for(i=10;i>=0;--i){
    document.write(i,",")
}
document.write("<br>Even :")
for(i=0;i<=10;++i){
    if(i%2==0){
        document.write(i,",")
    }
}
document.write("<br>Odd :")
for(i=0;i<=10;++i){
    if(i%2!=0){
        document.write(i,",")
    }
}
document.write("<br> Series :")
var series=2
for(i=1; i<=10 ;++i){
    v=series*i
    document.write(v,"k,")
}

//task7

var bakery=["cake","paties","pastry","cookies"]
var search=prompt("Which item do you want?")

function hey(search){
var p=bakery.length-1
for(i=0;i<=p;++i){
    if(bakery[i]==search){
        return(bakery[i]+" is available at index "+i+" in our bakery")   
        
    }
  
}return(search+" is not found, SORRY!")
}document.write("<br>",hey(search))

//task8
var A = [24, 53, 78, 91, 12]
var largest=0
for(i=0;i<A.length;++i){
    if(A[i]>largest){
        largest=A[i]
        
    }
}
document.write("<br>Array :",A)
document.write("<br>The largest number is :",largest)

//task9
var A = [24, 53, 78, 91, 12]
var smallest=100
for(i=0;i<A.length;++i){
    if(A[i]<smallest){
        smallest=A[i]
        
    }
}
document.write("<br>Array :",A)
document.write("<br>The largest number is :",smallest,"<br>")

//task10
var series1=5
for(i=1; i<=20 ;++i){
    v=series1*i
    document.write(v,",")
}*/
/*document.write("<h2>Chapter 21-25</h2>")
//task 1
var first=prompt("Enter Your First Name ")
var last=prompt("Enter Your Last Name ")
var fullname=(first+" "+last)
alert("Welcome "+fullname)

//task2
var mobile=prompt("Enter your favourite mobile: ")
document.write("My favourite phone is : "+mobile,"<br>")
document.write("The length is :"+mobile.length)

//task3
var pak="Pakistan"
document.write("<br>Index of n is :",pak.indexOf("n"))

//task 4
var hello="hello World"
document.write("<br>Last index of l is: ",hello.lastIndexOf("l"))

//task 5
var pakistani="Pakistani"
document.write("<br>The character at 3rd index is: ",pakistani[3])

//task 6
var fn=prompt("Enter your first name")
var ln=prompt("Enter your last name")
alert("Welcome "+fn.concat(" "+ln))

//task 7
var str="Hyderabad"
document.write("<br>City: ",str)
document.write("<br>After replacement: ",str.replace("Hyder","Islam"))

//task 8
var msg="Ali and Sami are best friends. They play cricket andfootball together"
document.write("<br>",msg)
document.write("<br>",msg.replace(/and/g,"&"))

//task 9
var conversion=472
document.write("<br>Value: ",conversion,"<br>Type: ",typeof(conversion))
var conver=String(conversion)
document.write("<br>Value: ",conver,"<br>Type: ",typeof(conver))

//task 10
var program=prompt("Enter the word")
alert("Capital letter: "+program.toUpperCase())

//task 11
var title=prompt("Enter the word: ")
alert("Title case: "+title.charAt(0).toUpperCase() + title.substr(1).toLowerCase())

//task 12
var num=35.36
var con=String(num)
document.write("<br> Number: ",num,"<br>Result: ",con.replace(".",""),"<br>")

//task 14

var bakery=["cake","paties","pastry","cookies"]
var search=prompt("Which item do you want?")
var f=search.slice(0,1)
var l=search.slice(1)
var first=f.toLowerCase()
var last=l.toLowerCase()
var search=first+last

function hey(search){
var p=bakery.length-1
for(i=0;i<=p;++i){
    if(bakery[i]==search){
        return(bakery[i]+" is available at index "+i+" in our bakery")   
        
    }
  
}return(search+" is not found, SORRY!")
}document.write("<br>",hey(search))

//task 15
var pass=prompt("Enter the password")
if(pass[0]==parseInt(pass)){
    alert("Password can not begin with a number ")
}
else if(pass.length<6){
    alert("Please enter a strong password")
}
else{
    alert("Your Password is valid")
}

//task16
var splitting="University Of Karachi"
var arr=[]
var p=splitting.split("")
for(i=0;i<=p.length-1;++i){
    document.write(p[i],"<br>")
    arr.push(p[i])
}



//task17
var take=prompt("Enter the word")
document.write("<br>",take.charAt(take.length-1))

//task18
var dog="the quick brown fox jumps over the lazy dog"
var searching=dog.match(/the/g)
document.write(searching.length)

document.write("<h2>Chapter 26-30</h2>")

//task 1
var numbers=prompt("Enter the number")
document.write("<br>Number: ",numbers,"<br>Round of: ",Math.round(numbers),"<br>Floor value: ",Math.floor(numbers),"<br>Ceil value: ",Math.ceil(numbers))

//task 2
var num=prompt("Enter negative number")
document.write("<br>Number: ",num,"<br>Round of: ",Math.round(num),"<br>Floor value: ",Math.floor(num),"<br>Ceil value: ",Math.ceil(num))

//task 3
var absolute=prompt("Enter the number")
document.write("<br> abs is: ",Math.abs(absolute))

//task 4
var dice="The number of dice is: "
document.write("<br>",dice,(Math.round(Math.random(dice)*10)))

//task 5
var coin="Random coin value is: "
var toss=(Math.round(Math.random(coin)*10))
document.write("<br>",toss,"<br>")
if(toss<=2){
    document.write(coin," Head")
}
else{
    document.write(coin," Tail")
}

//task 6
document.write("<br> The random number is: ",(Math.round(Math.random()*100)))


//task 8
var secret=(Math.round(Math.random()*10))
var take=prompt("Enter the number between 1-10")
if(secret==take){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}

document.write("<h2>Chapter 31-34</h2>")

//task 1
var d=new Date()
document.write("<br>",d)

//task 2
var d=new Date()
var months=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
document.write("<br>Current month: ",months[d.getMonth()])

//task 3
var d=new Date()
var k=d.toString()
document.write("<br>Today is: ",k.slice(0,3))

//task 4
var d=new Date()
var k=d.toString()
var l=k.slice(0,3)
if(l=="Sat"|l=="Sun"){
    document.write("<br>It's a funday")
}

//task 5
var d=new Date()
var k=d.toString()
var g=k.slice(8,10)
if(g<16){
    document.write("<br>First fifteen days of month")
}
else{
    document.write("<br>Last days of month")
}

//task 6
var d=new Date()
document.write("<br>Current date: ",d,"<br>Ellapsed milliseconds since januray 1: ",d.getTime())

//task 7
var hr=new Date().getHours()
if(hr>12){
    document.write("It's PM")
}
else{
    document.write("It's AM")
}

//task 8
var laterdate=new Date()
laterdate.setFullYear(2020,11,31)
document.write("<br>",laterdate)

//task 9
var fd=new Date("6/18/2015")
var sd=new Date("6/17/2020")
var q=Math.abs(sd.getTime()-fd.getTime());
var dayss=Math.ceil(q/(1000*3600*24))
document.write("<br>",dayss,"days have been passed since 1st Ramadam,2015")

//task 10
var fd=new Date("1/01/2015")
var sd=new Date("11/07/2020")
var q=Math.abs(sd.getTime()-fd.getTime());
var dayss=Math.ceil(q/(3600*24))
document.write("<br>",dayss,"seconds elapsed between the reference date and the beginning of 2015")


//task 11
var w=new Date()
var w2= new Date()
w.setHours(17)
document.write("<br> Current date ",w,"<br> 1 hour ago it was: ",w2)


//task 12
var dates=new Date()
document.write("Current date: ",dates)
dates.setFullYear(1920,06,17)
document.write("<br> 100 years back it was ",dates)

//task 13
var d=new Date()
var age=prompt("Enter your age: ")
document.write("<br>Your birth year is : ", (d.getFullYear()-age))

//task 14
var name=prompt("Enter your name")
var d=new Date()
var months=["jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
var numberofunit=300
var charges=200
var netamount=numberofunit*charges
var late=100
var gross=netamount+late
document.write("<h2>K-electric bill</h2><br>Customer Name : ",name,"<br>Month: ",months[d.getMonth()],"<br>Numbers of unit: ",numberofunit,"<br>Charges per unit: ",charges,"<br>net amount Payable(Within due date) : ",netamount,"<br>Late payment surcharge: ",late,"<br>Gross amount payable: ",gross)



document.write("<h2>Chapter 35-38</h2>")

//task 1
function first(){
    d=new Date()
    return d
}
document.write("<br>",first())

//task 2
var take=prompt("Enter first name")
var last=prompt("Enter last name")
function input(){
    alert("Welcome! "+take+" "+last)
}
input()

//task 3
var num=+prompt("enter number")
var num1=+prompt("enter number")
function adding(){
    b=num+num1
    return b
}
document.write("<br>",adding())

//task 4
function calc(num1,opr,num2){
    if(opr=="+"){
        return num1+num2
    }
    else if(opr=="-"){
        return num1-num2
    }
    else if(opr=="*"){
        return num1*num2
    }
    else if(opr=="/"){
        return num1/num2
    }

}
document.write("<br>",calc(2,"+",2))

//task 5
function square(a){
    return a*a
}
document.write("<br>",square(4))

//task 6
function fact(n){
    if(n==1|n==0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
document.write("<br>Factorial is ",fact(4))

//task 7
var n1=+prompt("Enter number 1")
var n2=+prompt("Enter number 2")
function counting(){
for(i=n1;i<=n2;++i){
    document.write("<br>",i)
}
}counting()

//task 8
var nest=+prompt("Enter base")
var nest2=+prompt("Enter perpendicular")
function hypotenus(){
    var hypo=Math.sqrt(nest*nest + nest2*nest2)
    function square(){
        var a=hypo*hypo
        return a
    }return square()


}document.write("<br>",hypotenus())

//task 9
function area(width,height){
    return width*height
}
document.write("<br>","A= ",area(2,3),"<br>A= ",area(width=2,height=4))

//task 10
function palindrome(f){
    if(f==f.split('').reverse().join('')){
        return "It is palindrome"
    }
    else{
        return "It is not palindrome"
    }
}document.write("<br>",palindrome("madam"))

//task 11
function cases(upper){
var arr2=upper.split(' ')
var empty=[]
    for(i=0;i<arr2.length;++i){
        empty.push(arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1))
    }document.write("<br>",empty.join(' '))
}(cases("quick brown fox"))

//task 12
function longestWord(string) {
    var str = string.split(" ")
    var longest = 0
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length
            var word = str[i]
        }
    }
    return word
}
document.write("<br>",longestWord("Web Development Tutorial"))

//task 13
function countings(str,letter){
var r=str.split('')
count=0
for (i = 0; i < str.length; i++) {
    if(r[i]==letter){
        count+=1
    }
}return count

}document.write("<br>",countings("JSResourceS.com","o"))

//task 14
function calcCircumfernce(radius){
    return 2*3.142*radius
}
function calcArea(radius){
    return 3.142*radius*radius
}
document.write("<br>The circumference is: ",calcCircumfernce(2),"<br>The area of circle is: ",calcArea(3))*/
//Write a custom function power (a,b) to calculate the value of a raised to b.

// function raisedto(a,b){
//     var theraise = a**b
//     return theraise
// }

// console.log(""+raisedto(3,2))

// //Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// var a = window.prompt("Enter the year: ")
// function leapyear(){
//     if(a%4==0){
//         return("This year is a leap year!")
//     }else{
//         return("This year is not a leap year!")
//     } 
// }

// console.log(""+leapyear())

// // If the lengths of the sides of a triangle are denoted by a, b, and
// // c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2

// function areatriangle(a,b,c){
//     var s=(a+b+c)/2;
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     return area
// }

// console.log(""+areatriangle(2,3,4))

// //Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

// var chem = window.prompt("Enter number in chem:")
// var urdu = window.prompt("Enter number in urdu:")
// var physics = window.prompt("Enter number in physics:")

// function Marks(){
//     var totalmarks = parseInt(chem)+parseInt(urdu)+parseInt(physics)
//     return totalmarks
// }
// function percentage(){
//     var percent = (Marks()/300)*100
//     return percent
// }
// console.log("The total marks occupied are: "+Marks())
// console.log("Percentage is: "+percentage()+" %")

//Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// var sentenc = ("The quick brown fox jumps over the lazy dog!");
// console.log(sentenc)
// function vowels(b){
//         r = b.replace(/[aeiou]/g,"")
//         return r
// }
// console.log(""+vowels("The quick brown fox jumps over the lazy dog"))

// //Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.

// //The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// var distance = "13000kilometer"
// function meters(){
//     var met = (13000*1000)
//     return met
// }

// function feets(){
//     var feet = (13000*3280.84)
//     return feet
// }

// function inches(){
//     var inch = (13000*39370.1)
//     return inch
// }

// function centimeters(){
//     var cm = (13000*100000)
//     return cm
// }

// console.log("13000kilometeres = "+meters()+" meters")
// console.log("13000kilometeres = "+feets()+" feets")
// console.log("13000kilometeres = "+inches()+" inches")
// console.log("13000kilometeres = "+centimeters()+" cm")

// function popup(message){
//     alert(message)
// }
// //

// function remove_1(){
//     var element1 = document.getElementById("1st");
//     element1.remove();
// }
// function remove_2(){
//     var element2 = document.getElementById("2nd");
//     element2.remove();
// }
// function remove_3(){
//     var element3 = document.getElementById("3rd");
//     element3.remove();
// }
// function remove_4(){
//     var element4 = document.getElementById("4th");
//     element4.remove();
// }

// //Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// function changeImage(){
//     var mobile = document.getElementById('1')
//     mobile.src = "C:\Users\huzaifa\Desktop\ifernando-silva-iphone.jpeg"
// }

// function changeImagebefore(){
//     var mobile = document.getElementById('1')
//     mobile.src = "C:\Users\huzaifa\Desktop\ifernando-silva-iphone.jpeg"
// }


//Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

// var clicks = 0;
// function onClick(){
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }

//Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

//function barapara() {
//    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//  document.getElementById("chotapara").innerHTML = expandedParagraph;
//}
