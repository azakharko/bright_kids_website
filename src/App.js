import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Course from "./components/Course/Course";
import Feedback from "./components/Feedback/Feedback";
import FirstLesson from "./components/FirstLesson/FirstLesson";
import Home from "./components/Home/Home";
import Start from "./components/howToStart/Start";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import HomeCard from "./components/HomeCard/HomeCard";
import Media from "./components/Media/Media";
import Ready from "./components/Ready/Ready";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("us");

  const translations = {
    us: {
      HomePage: {
        aboutUs: "About us",
        courses: "Courses",
        learningMaterials: "Learning materials",
        title: "Best online Ukraine language courses with teachers from Ukraine",
        description: "Preserve national identity with courses for children and adults",
        signUp: "Sign up for a free trial class",
      },
      HomeCardPage: {
        card1: "Courses for kids and adults",
        card2: "Online learning",
        card3: "American and Ukrainian approach",
        card4: "Soft skills development",
        card5: "Preserving Ukrainian identity",
        card6: "Affordable prices",
      },
      CoursePage: {
        title: "Course",
        subTitle: "Course",
        price: "Price: 0$ / course",
        age1: "Age of children:",
        age2: "years",
        course1: {
          title: "Ukrainian Language",
          subTitle: "Subject",
          age: "6-9"
        },
        course2: {
          title: "Chess",
          subTitle: "Brain",
          age: "12-15"
        },
        course3: {
          title: "Painting",
          subTitle: "Art",
          age: "12-15"
        },
        course4: {
          title: "Roblox",
          subTitle: "Programing",
          age: "12-15"
        },
        course5: {
          title: "Scratch",
          subTitle: "Programing",
          age: "12-15"
        },
        course6: {
          title: "Python",
          subTitle: "Programing",
          age: "12-15"
        },
        course7: {
          title: "Sing",
          subTitle: "Music",
          age: "12-15"
        },
        course8: {
          title: "Piano",
          subTitle: "Music",
          age: "12-15"
        },
        course9: {
          title: "Math",
          subTitle: "Brain",
          age: "12-15"
        },
        course10: {
          title: "Logic",
          subTitle: "Brain",
          age: "12-15"
        },
        course11: {
          title: "History of Ukraine",
          subTitle: "Subject",
          age: "12-15"
        },
      },
      FirstLesson: {
        title: "Get the first one free class",
        inputName: "Write your first name",
        inputNamePlacholder: "Name",
        inputLastName: "Write your last name",
        inputLaseNamePlacholder: "Surname",
        inputAddress: ">Write your email address",
        inputAddressPlacholder: "Email",
        inputMessage: ">Write your message",
        inputMessagePlacholder: "Message",
        buttonTitle: "Submit",
      },
      StartPage: {
        title: "How to start?",
        subtitle1: "Choose course",
        subtitle2: "Free trial lesson",
        subtitle3: "Payment",
        subtitle4: "Start learning",
        button1: "Schedule",
        button2: "Sign up",
      },
      About: {
        title: "About us",
        description: "Welcome to Bright Kids Ukrainian Online School, a visionary educational platform founded by Nadiya Zhurba. Our mission is to bridge the linguistic and cultural gap for English-speaking children learning Ukrainian and Ukrainian children residing in the USA who may have lost touch with their native language",
      },
      Benefits: {
        title: "Our benefits",
        subTiteSmall: "More",
        subTite1: "students from 11 countries over last two years",
        subTite2: "highly qualified teachers from Ukraine",
        subTite3: "learning courses",
        subTite4: "own methodological developments",
        button1: "Learning materials",
        button2: "Try free trial lesson",
      },
      Feedback: {
        title: "What our clients say",
      },      
      FAQ: {
        title: "Our clients often ask us",
        faqTitle1: "What is the price per lesson?",
        faqDescirption1: "Learning in groups - from $11 per hour (lesson duration - 60 min), individual learning - from $20 (lesson duration - 45 min)",

        faqTitle2: "What is classes schedule?",
        faqDescirption2: "We have flexible schedule. Typically classes are held once or twice a week in afterschool hours or at the weekends (CST timezone)",

        faqTitle3: "What is the course duration?",
        faqDescirption3: "10 is a minimal number of lessons you have to pre-pay after free trial class",

        faqTitle4: "Who is teaching my kids?",
        faqDescirption4: "Our teachers all are from Ukraine, they are actively teaching kids at schools in Lviv, Kyiv and Ivano-Frankivsk",

        faqTitle5: "How to apply?",
        faqDescirption5: "You have many options here: apply over web-site by filling in an application form, email us or alternatively contact us in any of social networks like facebook, tik-tok, instagram or youtube",

        faqTitle6: "How to pay?",
        faqDescirption6: "We accept PayPal, Venmo, Zelle, Privat24, Credit/Debit cards or Direct Deposit (ACH)",

        faqTitle7: "Any discount/loyalty programs?",
        faqDescirption7: "1) Family discount. 2 or more kids from one family in the same group - monthly discount of $10 per family. Applies to group classes only 2)Multiple cources discount. Take 3 or more cources and get $10 less every month. Applies for 3rd course only 3) Reference bonus. Invite a friend and get one-time $15 discount",
      },
      MediaPage: {
        title: "Media about us",
      },
      ReadyPage: {
        title: "Ready to start learning?",
        description: "Then call us, and we will arrange everything for you!",
        callUsButton: "Call us",
        trialLessonButton: "Try a free trial lesson",
      },
      Footer: {
        title: "Bright Kids Ukrainian Online School -  A school where your children can learn the language in a fun, fast and high-quality way",
        subTite1: "Privacy policy",
        subTite2: "Terms of use",
        subTite3: "Refund policy",
        emailTitle: "Email",
        button: "Sumbit"

      },
    },
    ua: {
      HomePage: {
        aboutUs: "Про нас",
        courses: "Курси",
        learningMaterials: "Навчальні матеріали",
        title: "Найкращі онлайн-курси української мови з вчителями з України",
        description: "Зберігайте національну ідентичність за допомогою курсів для дітей та дорослих",
        signUp: "Записатися пробний урок",
      },
      HomeCardPage: {
        card1: "Курси для дітей та дорослих",
        card2: "Онлайн навчання",
        card3: "Американський та український підхід",
        card4: "Розвиток м'яких навичок",
        card5: "Збереження української ідентичності",
        card6: "Доступні ціни",
      },
      CoursePage: {
        title: "Курси",
        subTitle: "Курс",
        price: "Ціна: 0$ / курс",
        age1: "Вік дітей:",
        age2: "роки",

        course1: {
          title: "Українська мова",
          subTitle: "Предмет",
          age: "6-9"
        },
        course2: {
          title: "Шахи",
          subTitle: "Мишлення",
          age: "12-15"
        },
        course3: {
          title: "Живопис",
          subTitle: "Мистецтво",
          age: "12-15"
        },
        course4: {
          title: "Roblox",
          subTitle: "Програмування",
          age: "12-15"
        },
        course5: {
          title: "Scratch",
          subTitle: "Програмування",
          age: "12-15"
        },
        course6: {
          title: "Python",
          subTitle: "Програмування",
          age: "12-15"
        },
        course7: {
          title: "Спів",
          subTitle: "Музика",
          age: "12-15"
        },
        course8: {
          title: "Фортепіано",
          subTitle: "Музика",
          age: "12-15"
        },
        course9: {
          title: "Математика",
          subTitle: "Мишлення",
          age: "12-15"
        },
        course10: {
          title: "Логіка",
          subTitle: "Мишлення",
          age: "12-15"
        },
        course11: {
          title: "Історія України",
          subTitle: "Предмет",
          age: "12-15"
        },
      },
      FirstLesson: {
        title: "Отримайте перший безкоштовний урок",
        inputName: "Введіть ваше ім'я",
        inputNamePlacholder: "Ім'я",
        inputLastName: "Введіть ваше прізвище",
        inputLaseNamePlacholder: "Прізвище",
        inputAddress: "Введіть вашу електронну адресу",
        inputAddressPlacholder: "Електронна адреса",
        inputMessage: "Напишіть ваше повідомлення",
        inputMessagePlacholder: "Повідомлення",
        buttonTitle: "Відправити",
      },
      StartPage: {
        title: "Як розпочати?",
        subtitle1: "Виберіть курс",
        subtitle2: "Безкоштовний урок",
        subtitle3: "Оплата",
        subtitle4: "Почніть навчання",
        button1: "Розклад",
        button2: "Записатися",
      },
      About: {
        title: "Про нас",
        description: "Ласкаво просимо до онлайн-школи Bright Kids Ukrainian, візійної освітньої платформи, заснованої Надією Журбою. Наша місія - зменшити лінгвістичний і культурний розрив для англомовних дітей, які вивчають українську мову, і українських дітей, що проживають у США, які можуть втратити зв'язок із своєю рідною мовою",
      },
      Benefits: {
        title: "Наші переваги",
        subTiteSmall: "Більше",
        subTite1: "студентів з 11 країн за останні два роки",
        subTite2: "висококваліфіковані вчителі з України",
        subTite3: "навчальні курси",
        subTite4: "власні методичні розробки",
        button1: "Навчальні матеріали",
        button2: "Спробувати безкоштовно",
      },
      Feedback: {
        title: "Що говорять наші клієнти",
      },      
      FAQ: {
        title: "Наші клієнти часто запитують",
        faqTitle1: "Яка ціна за урок?",
        faqDescirption1: "Навчання в групах - від $11 за годину (тривалість уроку - 60 хв), індивідуальне навчання - від $20 (тривалість уроку - 45 хв)",

        faqTitle2: "Який графік занять?",
        faqDescirption2: "У нас гнучкий графік. Зазвичай заняття проводяться один або два рази на тиждень в післяшкільний час чи в вихідні (за часовим поясом CST)",

        faqTitle3: "Яка тривалість курсу?",
        faqDescirption3: "Мінімальна кількість занять, яку ви повинні оплатити після пробного уроку - 10",

        faqTitle4: "Хто викладає моїх дітей?",
        faqDescirption4: "Наші вчителі всі з України, вони активно викладають дітей в школах Львова, Києва та Івано-Франківська",

        faqTitle5: "Як подати заявку?",
        faqDescirption5: "У вас є багато варіантів: подати заявку через веб-сайт, заповнивши аплікаційну форму, напишіть нам на електронну пошту або зв'яжіться з нами в будь-якій з соціальних мереж, таких як Facebook, TikTok, Instagram або YouTube",

        faqTitle6: "Як оплатити?",
        faqDescirption6: "Ми приймаємо PayPal, Venmo, Zelle, Privat24, кредитні / дебетові картки або прямий депозит (ACH)",

        faqTitle7: "Є програми знижок/лояльності?",
        faqDescirption7: "1) Знижка для сім'ї. 2 чи більше дітей з однієї сім'ї в одній групі - щомісячна знижка $10 на сім'ю. Застосовується лише до групових занять. 2) Знижка за кілька курсів. Оберіть 3 або більше курсів і отримайте знижку $10 щомісяця. Застосовується лише до третього курсу. 3) Бонус за рекомендацію. Запросіть друга і отримайте одноразову знижку $15",
      },
      MediaPage: {
        title: "ЗМІ про нас",
      },
      ReadyPage: {
        title: "Готові до навчання?",
        description: "Тоді зателефонуйте нам, і ми все для вас організуємо!",
        callUsButton: "Подзвоніть нам",
        trialLessonButton: "Спробувати безкоштовний урок",
      },
      Footer: {
        title: "Bright Kids Ukrainian Online School - Школа, де ваші діти можуть вивчати мову весело, швидко і якісно",
        subTite1: "Конфіденційності",
        subTite2: "Використання",
        subTite3: "Повернення коштів",
        emailTitle: "Пошта",
        button: "Відправити"
      },
    },
  };
  const currentTranslations = translations[selectedLanguage];
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      { question: currentTranslations.FAQ.faqTitle1, answer: currentTranslations.FAQ.faqDescirption1, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle2, answer: currentTranslations.FAQ.faqDescirption2, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle3, answer: currentTranslations.FAQ.faqDescirption3, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle4, answer: currentTranslations.FAQ.faqDescirption4, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle5, answer: currentTranslations.FAQ.faqDescirption5, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle6, answer: currentTranslations.FAQ.faqDescirption6, isOpen: false },
      { question: currentTranslations.FAQ.faqTitle7, answer: currentTranslations.FAQ.faqDescirption7, isOpen: false },

    ]);
  }, [selectedLanguage]) 
  // If we use currentTranslations, then there is an endless loop of calling useEffect


  useEffect(() => {
    const path = window.location.pathname.toLowerCase();

    if (path === '/' || path.startsWith('/us')) {
      setSelectedLanguage('us');
    } else if (path.startsWith('/ua')) {
      setSelectedLanguage('ua');
    } else {
      setSelectedLanguage('us');
      window.history.replaceState({}, '', "/us");
    }
  }, [setSelectedLanguage]);



  return (
    <div className="App">
      <Home translations={translations} selectedLanguag={selectedLanguage} setSelectedLanguage={setSelectedLanguage} currentTranslations={currentTranslations} />
      <HomeCard  urrentTranslations={currentTranslations}/>
      <Course urrentTranslations={currentTranslations} />
      <FirstLesson urrentTranslations={currentTranslations} />
      <Start urrentTranslations={currentTranslations} />
      <About urrentTranslations={currentTranslations} />
      <Benefits urrentTranslations={currentTranslations} />
      <Feedback urrentTranslations={currentTranslations} />
      <FAQ setCards={setCards} cards={cards} urrentTranslations={currentTranslations} />
      <Media  urrentTranslations={currentTranslations}/>
      <Ready urrentTranslations={currentTranslations}/>
      <Footer urrentTranslations={currentTranslations} />

    </div>
  );
}

export default App;
