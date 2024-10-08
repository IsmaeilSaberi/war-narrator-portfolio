import React, { useState } from 'react'
import { Menu, X, Book, Mic, PenTool, Github, Linkedin, Twitter, X as Close } from 'lucide-react'

interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  purchaseLink: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "روزهای آتش و خون",
    description: "روایتی از عملیات والفجر ۸",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80",
    fullDescription: "این کتاب روایتی مستند و تأثیرگذار از عملیات والفجر ۸ در دفاع مقدس است. نویسنده با استفاده از مصاحبه‌های اختصاصی با رزمندگان و فرماندهان، تصویری زنده و واقعی از این نبرد سرنوشت‌ساز ارائه می‌دهد.",
    purchaseLink: "https://example.com/purchase/book1"
  },
  {
    id: 2,
    title: "مردان خاکی",
    description: "داستان‌های واقعی از رزمندگان گمنام",
    image: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    fullDescription: "مردان خاکی مجموعه‌ای از داستان‌های کوتاه و واقعی درباره رزمندگان گمنام دفاع مقدس است. این کتاب به زندگی و فداکاری‌های سربازانی می‌پردازد که نامشان در تاریخ ثبت نشده، اما نقش مهمی در دفاع از میهن داشته‌اند.",
    purchaseLink: "https://example.com/purchase/book2"
  },
  {
    id: 3,
    title: "پرواز در شب",
    description: "خاطرات یک خلبان در دفاع مقدس",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fullDescription: "پرواز در شب، روایت خاطرات یک خلبان نیروی هوایی در طول دفاع مقدس است. این کتاب خواننده را به درون کابین خلبان می‌برد و تجربیات نفس‌گیر عملیات‌های هوایی را به تصویر می‌کشد.",
    purchaseLink: "https://example.com/purchase/book3"
  }
];

const BookModal: React.FC<{ book: Book; onClose: () => void }> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Close className="w-6 h-6" />
          </button>
        </div>
        <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-4 rounded" />
        <p className="text-gray-700 mb-4">{book.fullDescription}</p>
        <a href={book.purchaseLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">خرید کتاب</a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">راوی دفاع مقدس</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">درباره من</a>
                <a href="#experience" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">تجربیات</a>
                <a href="#works" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">آثار</a>
                <a href="#books" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">کتاب‌ها</a>
                <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">تماس</a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">درباره من</a>
              <a href="#experience" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">تجربیات</a>
              <a href="#works" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">آثار</a>
              <a href="#books" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">کتاب‌ها</a>
              <a href="#contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">تماس</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">راوی دفاع مقدس، سخنران و نویسنده</h1>
            <p className="text-xl mb-6">روایت داستان‌های ناگفته از خط مقدم</p>
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">تماس با من</a>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="راوی دفاع مقدس" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">درباره من</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="تصویر" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <p className="text-lg mb-4">به عنوان یک راوی دفاع مقدس، سخنران و نویسنده، زندگی خود را وقف به اشتراک گذاشتن داستان‌های افرادی کرده‌ام که در دوران دفاع مقدس حضور داشته‌اند. با بیش از یک دهه تجربه در ثبت و روایت خاطرات رزمندگان، دیدگاهی منحصر به فرد از واقعیت‌های دفاع مقدس و تأثیر آن بر افراد و جامعه ارائه می‌دهم.</p>
              <p className="text-lg mb-4">هدف کار من پر کردن شکاف بین نسل‌های مختلف و انتقال ارزش‌های دفاع مقدس از طریق داستان‌سرایی قدرتمند است.</p>
              <div className="flex space-x-4">
                <Book className="w-6 h-6 text-gray-600" />
                <Mic className="w-6 h-6 text-gray-600" />
                <PenTool className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">تجربیات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">راوی دفاع مقدس</h3>
              <p className="text-gray-600 mb-4">بنیاد حفظ آثار و نشر ارزش‌های دفاع مقدس (۱۳۸۹-تاکنون)</p>
              <ul className="list-disc list-inside">
                <li>ثبت و روایت خاطرات بیش از ۵۰۰ رزمنده و ایثارگر</li>
                <li>برگزاری جلسات روایتگری در مدارس و دانشگاه‌ها</li>
                <li>تولید مستندهای تلویزیونی درباره وقایع مهم دفاع مقدس</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">نویسنده</h3>
              <p className="text-gray-600 mb-4">آثار منتشر شده (۱۳۹۴-تاکنون)</p>
              <ul className="list-disc list-inside">
                <li>"صداهایی از خط مقدم" - مجموعه پرفروش داستان‌های دفاع مقدس</li>
                <li>"چهره انسانی نبرد" - کتاب عکس و روایت از رزمندگان</li>
                <li>همکاری منظم با نشریات تخصصی دفاع مقدس</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">سخنران</h3>
              <p className="text-gray-600 mb-4">سخنرانی‌های ملی (۱۳۹۱-تاکنون)</p>
              <ul className="list-disc list-inside">
                <li>سخنرانی در همایش ملی "روایت حماسه": "داستان‌های ناگفته دفاع مقدس" (بیش از ۵۰۰۰ شرکت‌کننده)</li>
                <li>استاد مدعو در دانشگاه‌های معتبر کشور</li>
                <li>سخنران اصلی در یادواره‌های شهدا و رویدادهای فرهنگی دفاع مقدس</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">پژوهشگر تاریخ دفاع مقدس</h3>
              <p className="text-gray-600 mb-4">مرکز اسناد و تحقیقات دفاع مقدس (۱۳۸۷-تاکنون)</p>
              <ul className="list-disc list-inside">
                <li>جمع‌آوری و آرشیو اسناد و مدارک مرتبط با دفاع مقدس</li>
                <li>مشارکت در تدوین دانشنامه دفاع مقدس</li>
                <li>همکاری با موزه‌های دفاع مقدس در سراسر کشور</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">آثار برجسته</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80" alt="جلد کتاب" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">صداهایی از خط مقدم</h3>
              <p className="text-gray-600">مجموعه‌ای از روایت‌های شخصی رزمندگان، جانبازان و خانواده‌های شهدا در دوران دفاع مقدس.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="پوستر مستند" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">حماسه خرمشهر</h3>
              <p className="text-gray-600">مستند برنده جایزه که روایتی مستند از آزادسازی خرمشهر در عملیات بیت المقدس را به تصویر می‌کشد.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="تصویر مقاله" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">میراث دفاع مقدس</h3>
              <p className="text-gray-600">مجموعه مقالاتی که تأثیر دفاع مقدس بر فرهنگ، هنر و ادبیات معاصر ایران را بررسی می‌کند.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">کتاب‌های من</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedBook(book)}>
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-600">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">تماس با من</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-4">آیا علاقه‌مند به رزرو سخنرانی، همکاری یا درخواست رسانه‌ای هستید؟ لطفاً تردید نکنید و با من تماس بگیرید.</p>
              <p className="text-lg mb-4">ایمیل: contact@defaemoghaddas.com</p>
              <p className="text-lg mb-4">تلفن: ۱۲۳۴۵۶۷-۰۲۱</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-white hover:text-gray-300"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-white hover:text-gray-300"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">نام</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">ایمیل</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">پیام</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">ارسال پیام</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© ۱۴۰۲ راوی دفاع مقدس. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}

export default App