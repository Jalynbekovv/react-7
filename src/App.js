import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contacts/Contacts";
import Phone from "./pages/phone/Phone";
import Address from "./pages/address/Address";
import Email from "./pages/email/Email";
import {Router} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>

                <Routes>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/contacts" element={<ContactsPage/>}/>
                  <Route path="/phone" element={<Phone/>}/>
                  <Route path="/address" element={<Address/>}/>
                  <Route path="/mail" element={<Email/>}/>
                </Routes>
          </BrowserRouter>
</div>
);
}

export default App;