import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sablon from "./ekranlar/Sablon";
import AnaEkran from "./ekranlar/AnaEkran";
import BlogEkrani from "./ekranlar/BlogEkrani";
import IletisimEkrani from "./ekranlar/IletisimEkrani";
import HataEkrani from "./ekranlar/HataEkrani";

/*
  Route componentleri yönlendirmek istediğimiz pencere sayısı kadar olmalıdır. Ve yönlendirilecek pencereleri temsil eder. Route componentlerinin içerisindeki path proplarına verilen
  değerler sayfa url'sinde / dan sonra gelecek kısmı ifade eder. "" içerisinde yazılı olan ifadeye yönlendirildiğinde açılacak olan pencereyi ise Route componentlerine verilen element
  proplarının içerisine yazılan componentlerdir.

  Aşağıdaki örnekte default penceremiz AnaEkran componentidir.
  Sablon componenti ise Sayfa açıldığında karşımıza gelecek componenttir.
  Yani Sablon componentinin içerisinde varsayılan olarak gözükecek component AnaEkran componentidir.

  En sonda bulunan Route componentinin path prop'unun içerisinde yazılan * ifadesi sayfada bulunmayan bir pencereye yönelinmek istenilirse HataEkrani componentini ekrana getirir.
  Mesela "aradığınız sayfa bulunamadı gibi.."
*/


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sablon />}>
          <Route index element={<AnaEkran />} />
          <Route path="blog" element={<BlogEkrani />} />
          <Route path="iletisim" element={<IletisimEkrani />} />
          <Route path="*" element={<HataEkrani />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
