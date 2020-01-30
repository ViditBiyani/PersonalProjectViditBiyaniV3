//Vidit Biyani Personal Project
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;

    var Influenza= 0;
    var Bronchitis=0;
    var dengueFever=0;
    var Gastroenteritis=0;
    var commonCold=0;
    var Hepatitis=0;
    var Measles=0;
    var Rabies=0;
    var viralPneumonia=0;


    if (question1 == "Yes, I have a headache and it is mild" || question1 == "Yes, I have a headache and it is severe") {
		Influenza++;
		commonCold++;
		dengueFever++;
		Bronchitis++;
		Gastroenteritis++;
    }

    if (question2 == "Yes, I have a mild fever" || question2 == "Yes, I have a medium fever" || question2 == "Yes, I have a severe fever") {
        commonCold++;
        Influenza++;
        Bronchitis++;
        Gastroenteritis++;
        dengueFever++;
        Hepatitis++;
        viralPneumonia++;
        Measles++;
    }
    if (question3 == "Yes, I have visible skin rashes"){
        dengueFever++;
        Measles++;
    }
    if (question4 == "Yes, I have stomach pain" || question4 == "Yes, I have diarrhea" || question4 == "Yes, I have constipation"){
        Gastroenteritis++;
    }
    if (question5 == "Yes, I am sneezing" || question5 == "Yes, I am coughing" || question5 == "Yes, I am sneezing and coughing"){
        commonCold++;
        Influenza++;
        Bronchitis++;
        Measles++;
        viralPneumonia++;
    }
    if (question6 == "Yes, I am having abdominal pain"){
        Hepatitis++;
    }
    if (question7 == "Yes, I have yellow eyes" || question7 == "Yes, I have yellow skin" || question7 == "Yes, I have yellow eyes and skin" ){
        Hepatitis++;
    }
    if (question8 == "Yes, I had serious bleeding"){
        viralPneumonia++;
    }
    if (question9 == "Yes, I feel unhappy and tired"){
        commonCold++;
        Influenza++;
        Bronchitis++;
        Gastroenteritis++;
        dengueFever++;
        Hepatitis++;
        viralPneumonia++;
	Rabies++;
    }
    if (question10 == "Yes, I have lost weight"){
        Gastroenteritis++;
    }
    if (question11 == "Yes, I have been vomiting"){
        Influenza++;
        Gastroenteritis++;
        dengueFever++;
        Hepatitis++;
    }
    if (question12 == "Yes, my chest hurts"){
        Bronchitis++;
    }
    if (question13 == "Yes, I have trouble breathing"){
        Bronchitis++;
        viralPneumonia++;
    }
    if (question14 == "Yes, I feel overly aggressive"){
        Rabies++;
    }
    if (question15 == "Yes, I have been having strange thoughts"){
        Rabies++;
    }
    if (question16 == "Yes, I have been having seizures"){
        Rabies++;
    }
    if (question17 == "Yes, I have joint pain" || question17 == "Yes, I have muscle pain" || question17 == "Yes, I have joint and muscle pain"){
        Influenza++;
        Gastroenteritis++;
        dengueFever++;
        Hepatitis++;
        viralPneumonia++;
	Rabies++;
    }

    //Vidit Biyani Personal Project

    if (Bronchitis >= Influenza && Bronchitis >= Measles && Bronchitis >= dengueFever && Bronchitis >= Gastroenteritis && Bronchitis >= commonCold && Bronchitis >=Hepatitis && Bronchitis >= Rabies && Bronchitis >= viralPneumonia ) {
	virus = "Bronchitis";
	explanation = "Bronchitis is caused by a respiratory virus that spreads very easily. It is important to wear a mask in public so the virus doesn't spread. Bronchitis is not severe and does not require medical personnel.";
    }
    if (Measles >= Influenza && Measles >= Bronchitis && Measles >= dengueFever && Measles >= Gastroenteritis && Measles >= commonCold && Measles >=Hepatitis && Measles >= Rabies && Measles >= viralPneumonia ) {
        virus = "Measles";
	explanation = "The Measles are not a very serious virus though complications may occur under special circumstances. It is important to see medical personnel and get medication. Since the Measles spread quickly, it is important to wear a mask in public to avoid infecting others.";
    }
    if (Influenza >= Bronchitis && Influenza >= dengueFever && Influenza >= Gastroenteritis && Influenza >= commonCold && Influenza >=Hepatitis && Influenza >= Measles && Influenza >= Rabies && Influenza >= viralPneumonia ) {
    	virus = "Influenza";
	explanation = "Influenza, also known as the Flue, is a respriatory viral infection that can be fatal if not treated. It is extremely important to visit medical personnel for this reason. Influenza spreads very easily so wearing masks and avoiding public places can stop further spread.";
    }
    if (commonCold >= Bronchitis && commonCold >= dengueFever && commonCold >= Gastroenteritis && commonCold >= Influenza && commonCold >=Hepatitis && commonCold >= Measles && commonCold >= Rabies && commonCold >= viralPneumonia ) {
        virus = "Common Cold";
	explanation = "The Common Cold, known simply as the Cold, is a virus that attacks the nose and throat. It spreads easily so wearing masks, avoiding stressful work, and avoiding public areas all help reduce the spread of the virus. The Common Cold does not require a visit to medical personnel.";
    }
    if (dengueFever >= Bronchitis && dengueFever >= Influenza && dengueFever >= Gastroenteritis && dengueFever >= commonCold && dengueFever >=Hepatitis && dengueFever >= Measles && dengueFever >= Rabies && dengueFever >= viralPneumonia ) {
        virus = "Dengue Fever";
	explanation = "Though it is extremely rare, Dengue Fever is very deadly and needs immediate medical attention. It spreads by mosquitos and insects rather than coughing/sneezing and physical contact.";
    }
    if (Gastroenteritis >= Bronchitis && Gastroenteritis >= dengueFever && Gastroenteritis >= Influenza && Gastroenteritis >= commonCold && Gastroenteritis >=Hepatitis && Gastroenteritis >= Measles && Gastroenteritis >= Rabies && Gastroenteritis >= viralPneumonia ) {
        virus = "Gastroenteritis";
	explanation = "Gastroenteritis, also known as Stomach Flu, is a virus that attacks the digestive track. Gastroenteritis does not require medical personnel and is very common. Gastroenteritis is caused by drinking contaminated water and coming in contact with someone infected.";
    }
    if (Hepatitis >= Bronchitis && Hepatitis >= dengueFever && Hepatitis >= Gastroenteritis && Hepatitis >= commonCold && Hepatitis >=Influenza && Hepatitis >= Measles && Hepatitis >= Rabies && Hepatitis >= viralPneumonia ) {
        virus = "Hepatitis";
	explanation = "Hepatitis A, B, and C are all caused by a virus that attacks the liver. Hepatitis is common and requires treatment from medical personnel. All forms of the Hepatitis virus are spread through sexual contact.";  
    }
    if (Rabies >= Bronchitis && Rabies >= dengueFever && Rabies >= Gastroenteritis && Rabies >= commonCold && Rabies >=Hepatitis && Rabies >= Measles && Rabies >= Influenza && Rabies >= viralPneumonia ) {
        virus = "Rabies";
	explanation = "Rabies is spread through infected animal bites. Rabies is extremely rare and requires medical personnel, as it is extremely dangerous. Rabies causes inflammation of the brain.";
    }
    if (viralPneumonia >= Bronchitis && viralPneumonia >= dengueFever && viralPneumonia >= Gastroenteritis && viralPneumonia >= commonCold && viralPneumonia >=Hepatitis && viralPneumonia >= Measles && viralPneumonia >= Rabies && viralPneumonia >= Influenza ) {
    	virus = "Viral Pneumonia";
	explanation = "Viral Pneumonia, a type of Pneumonia, is very common and spreads through coughing and sneezing. It requires medical attention and personnel and can be fatal to children and elderly people.";
    }
    if (viralPneumonia == Bronchitis && viralPneumonia == dengueFever && viralPneumonia == Gastroenteritis && viralPneumonia == commonCold && viralPneumonia == Hepatitis && viralPneumonia == Measles && viralPneumonia == Rabies && viralPneumonia == Influenza ) {
    	virus = "nothing";
	explanation = "You have no symptoms.";
    }
	document.getElementById("submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You have " + virus +". " + explanation;
}
//Vidit Biyani Personal Project