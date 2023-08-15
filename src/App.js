import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Onboarding2 from "./pages/Onboarding2";
import Payment from "./pages/Payment";
import Help from "./pages/Help";
import HOME from "./pages/HOME";
import SplitPay from "./pages/SplitPay";
import Messages from "./pages/Messages";
import SearchResults from "./pages/SearchResults";
import HowToEarnPoints from "./pages/HowToEarnPoints";
import Payment1 from "./pages/Payment1";
import FrameComponent from "./pages/FrameComponent";
import HOME1 from "./pages/HOME1";
import LogCashTransactions from "./pages/LogCashTransactions";
import Help1 from "./pages/Help1";
import Messages1 from "./pages/Messages1";
import HOME2 from "./pages/HOME2";
import FrameComponent1 from "./pages/FrameComponent1";
import HOME3 from "./pages/HOME3";
import HOME4 from "./pages/HOME4";
import FrameComponent2 from "./pages/FrameComponent2";
import Messages2 from "./pages/Messages2";
import Messages3 from "./pages/Messages3";
import FrameComponent3 from "./pages/FrameComponent3";
import Messages4 from "./pages/Messages4";
import Messages5 from "./pages/Messages5";
import Messages6 from "./pages/Messages6";
import HOME5 from "./pages/HOME5";
import FrameComponent4 from "./pages/FrameComponent4";
import Payment2 from "./pages/Payment2";
import Payment3 from "./pages/Payment3";
import Payment4 from "./pages/Payment4";
import Payment5 from "./pages/Payment5";
import HOME6 from "./pages/HOME6";
import HOME7 from "./pages/HOME7";
import SplitPay1 from "./pages/SplitPay1";
import FrameComponent6 from "./pages/FrameComponent6";
import SplitPay2 from "./pages/SplitPay2";
import SplitPay3 from "./pages/SplitPay3";
import SplitPay4 from "./pages/SplitPay4";
import SplitPay5 from "./pages/SplitPay5";
import SplitPay6 from "./pages/SplitPay6";
import Messages7 from "./pages/Messages7";
import FrameComponent7 from "./pages/FrameComponent7";
import Messages8 from "./pages/Messages8";
import Messages9 from "./pages/Messages9";
import Messages10 from "./pages/Messages10";
import Messages11 from "./pages/Messages11";
import Messages12 from "./pages/Messages12";
import FrameComponent8 from "./pages/FrameComponent8";
import Messages13 from "./pages/Messages13";
import Messages14 from "./pages/Messages14";
import Messages15 from "./pages/Messages15";
import Messages16 from "./pages/Messages16";
import Messages17 from "./pages/Messages17";
import Messages18 from "./pages/Messages18";
import Messages19 from "./pages/Messages19";
import FrameComponent9 from "./pages/FrameComponent9";
import Messages20 from "./pages/Messages20";
import Messages21 from "./pages/Messages21";
import FrameComponent10 from "./pages/FrameComponent10";
import FrameComponent11 from "./pages/FrameComponent11";
import Messages22 from "./pages/myPosts/Messages22";
import Messages23 from "./pages/postJob/Messages23";
import Messages24 from "./pages/Messages24";
import Messages26 from "./pages/postJob/Messages26";
import Messages27 from "./pages/Messages27";
import Messages28 from "./pages/postJob/Messages28";
import Messages29 from "./pages/postJob/Messages29";
import Messages30 from "./pages/Messages30";
import Messages31 from "./pages/Messages31";
import Messages32 from "./pages/Messages32";
import Messages33 from "./pages/Messages33";
import Messages34 from "./pages/Messages34";
import Messages35 from "./pages/Messages35";
import Messages36 from "./pages/myPosts/Messages36";
import HOME8 from "./pages/HOME8";
import HOME9 from "./pages/HOME9";
import HOME10 from "./pages/HOME10";
import FrameComponent12 from "./pages/FrameComponent12";
import FrameComponent13 from "./pages/FrameComponent13";
import HOME11 from "./pages/HOME11";
import HOME12 from "./pages/HOME12";
import HOME13 from "./pages/HOME13";
import HOME14 from "./pages/HOME14";
import FrameComponent14 from "./pages/FrameComponent14";
import HOME15 from "./pages/HOME15";
import HOME16 from "./pages/HOME16";
import HOME17 from "./pages/HOME17";
import HOME18 from "./pages/HOME18";
import HOME19 from "./pages/HOME19";
import HOME20 from "./pages/HOME20";
import HOME21 from "./pages/HOME21";
import HOME22 from "./pages/HOME22";
import HOME23 from "./pages/HOME23";
import HOME24 from "./pages/HOME24";
import HOME25 from "./pages/HOME25";
import HOME26 from "./pages/HOME26";
import HOME27 from "./pages/HOME27";
import GroupComponent from "./pages/GroupComponent";
import Messages37 from "./pages/Messages37";
import SignUp from "./pages/SignUp";
import Onboarding1 from "./pages/Onboarding1";
import FrameComponent15 from "./pages/FrameComponent15";
import SignUp1 from "./pages/SignUp1";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding4 from "./pages/Onboarding4";
import HOME28 from "./pages/HOME28";
import FrameComponent16 from "./pages/FrameComponent16";
import HOME29 from "./pages/HOME29";
import LogCashTransactions1 from "./pages/LogCashTransactions1";
import Payment6 from "./pages/Payment6";
import SplitPay7 from "./pages/SplitPay7";
import ReferEarn from "./pages/ReferEarn";
import PersonalSettings from "./pages/PersonalSettings";
import Security from "./pages/Security";
import { useEffect } from "react";
import app, { db } from "./firebase";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const action = useNavigationType();
  const location = useLocation();
 const navigate = useNavigate()
//calling user state from database
  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      if(user)
      {
        db.collection('customers').doc(user.uid).get().then(function(snapshot) {
            if(snapshot.data())
            {
             
            }
            else
            {
              navigate('/onboarding-4')
            }
          });
      }
      else
      {
        navigate('/sign-up')
      }
    })
  }, [])

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    backgroundColor: "white",
                },
            },
        },
        MuiButton: {
            primary: {
                color: "white",
            },
        },
    },
    typography: {
        button: {
            textTransform: "none",
            color: "white",
        },
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#2fa500",
            contrastText: "#fff",
            "&:hover": {
                contrastText: "#fff",
            },
            textDecoration: "none",
        },
    },
});
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/" element={<SignUp1 />} />

      <Route path="/payment2" element={<Payment />} />

      <Route path="/help1" element={<Help />} />

      <Route path="/home4" element={<HOME />} />

      <Route path="/split-pay1" element={<SplitPay />} />

      <Route path="/messages26" element={<Messages />} />

      <Route path="/search-results" element={<SearchResults />} />

      <Route path="/how-to-earn-points" element={<HowToEarnPoints />} />

      <Route path="/payment1" element={<Payment1 />} />

      <Route path="/frame-67581" element={<FrameComponent />} />

      <Route path="/home" element={<HOME1 />} />

      <Route path="/log-cash-transactions1" element={<LogCashTransactions />} />

      <Route path="/help" element={<Help1 />} />

      <Route path="/messages1" element={<Messages1 />} />

      <Route path="/home1" element={<HOME2 />} />

      <Route path="/frame-66836" element={<FrameComponent1 />} />

      <Route path="/home3" element={<HOME3 />} />

      <Route path="/home26" element={<HOME4 />} />

      <Route path="/frame-66840" element={<FrameComponent2 />} />

      <Route path="/messages5" element={<Messages2 />} />

      <Route path="/messages6" element={<Messages3 />} />

      <Route path="/frame-66841" element={<FrameComponent3 />} />

      <Route path="/messages4" element={<Messages4 />} />

      <Route path="/messages7" element={<Messages5 />} />

      <Route path="/messages8" element={<Messages6 />} />

      <Route path="/home5" element={<HOME5 />} />

      <Route path="/frame-67363" element={<FrameComponent4 />} />

      <Route path="/payment3" element={<Payment2 />} />

      <Route path="/payment4" element={<Payment3 />} />

      <Route path="/payment5" element={<Payment4 />} />

      <Route path="/payment6" element={<Payment5 />} />

      <Route path="/home6" element={<HOME6 />} />

      <Route path="/home27" element={<HOME7 />} />

      <Route path="/split-pay2" element={<SplitPay1 />} />

      <Route path="/frame-67364" element={<FrameComponent6 />} />

      <Route path="/split-pay3" element={<SplitPay2 />} />

      <Route path="/split-pay4" element={<SplitPay3 />} />

      <Route path="/split-pay5" element={<SplitPay4 />} />

      <Route path="/split-pay6" element={<SplitPay5 />} />

      <Route path="/split-pay7" element={<SplitPay6 />} />

      <Route path="/messages2" element={<Messages7 />} />

      <Route path="/frame-66837" element={<FrameComponent7 />} />

      <Route path="/messages10" element={<Messages8 />} />

      <Route path="/messages11" element={<Messages9 />} />

      <Route path="/messages12" element={<Messages10 />} />

      <Route path="/messages13" element={<Messages11 />} />

      <Route path="/messages27" element={<Messages12 />} />

      <Route path="/frame-66838" element={<FrameComponent8 />} />

      <Route path="/messages14" element={<Messages13 />} />

      <Route path="/messages15" element={<Messages14 />} />

      <Route path="/messages19" element={<Messages15 />} />

      <Route path="/messages28" element={<Messages16 />} />

      <Route path="/messages17" element={<Messages17 />} />

      <Route path="/messages9" element={<Messages18 />} />

      <Route path="/messages29" element={<Messages19 />} />

      <Route path="/frame-66842" element={<FrameComponent9 />} />

      <Route path="/messages16" element={<Messages20 />} />

      <Route path="/messages18" element={<Messages21 />} />

      <Route path="/frame-66839" element={<FrameComponent10 />} />

      <Route path="/frame-67365" element={<FrameComponent11 />} />

      <Route path="/messages" element={<Messages22 />} />

      <Route path="/messages20" element={<Messages23 />} />

      <Route path="/messages30" element={<Messages24 />} />

      <Route path="/messages25" element={<Messages26 />} />

      <Route path="/messages31" element={<Messages27 />} />

      <Route path="/messages21" element={<Messages28 />} />

      <Route path="/messages22" element={<Messages29 />} />

      <Route path="/messages23" element={<Messages30 />} />

      <Route path="/messages32" element={<Messages31 />} />

      <Route path="/messages33" element={<Messages32 />} />

      <Route path="/messages34" element={<Messages33 />} />

      <Route path="/messages35" element={<Messages34 />} />

      <Route path="/messages36" element={<Messages35 />} />

      <Route path="/messages3" element={<Messages36 />} />

      <Route path="/home8/:id" element={<HOME8 />} />

      <Route path="/home2" element={<HOME9 />} />

      <Route path="/home7" element={<HOME10 />} />

      <Route path="/frame-67438" element={<FrameComponent12 />} />

      <Route path="/frame-67439" element={<FrameComponent13 />} />

      <Route path="/home9/:id/:qkey" element={<HOME11 />} />

      <Route path="/home11" element={<HOME12 />} />

      <Route path="/home13" element={<HOME13 />} />

      <Route path="/home14" element={<HOME14 />} />

      <Route path="/frame-67440" element={<FrameComponent14 />} />

      <Route path="/home16" element={<HOME15 />} />

      <Route path="/home12" element={<HOME16 />} />

      <Route path="/home15" element={<HOME17 />} />

      <Route path="/home17" element={<HOME18 />} />

      <Route path="/home20" element={<HOME19 />} />

      <Route path="/home18" element={<HOME20 />} />

      <Route path="/home19" element={<HOME21 />} />

      <Route path="/home21" element={<HOME22 />} />

      <Route path="/home22" element={<HOME23 />} />

      <Route path="/home23" element={<HOME24 />} />

      <Route path="/home25" element={<HOME25 />} />

      <Route path="/home10/:id/:qkey" element={<HOME26 />} />

      <Route path="/home24" element={<HOME27 />} />

      <Route path="/group-66523" element={<GroupComponent />} />

      <Route path="/messages37" element={<Messages37 />} />

      <Route path="/sign-up1" element={<SignUp />} />

      <Route path="/onboarding-1" element={<Onboarding1 />} />

      <Route path="/frame-66835" element={<FrameComponent15 />} />

      <Route path="/sign-up" element={<SignUp1 />} />

      <Route path="/onboarding-3" element={<Onboarding3 />} />

      <Route path="/onboarding-4" element={<Onboarding4 />} />

      <Route path="/home28" element={<HOME28 />} />

      <Route path="/frame-67362" element={<FrameComponent16 />} />

      <Route path="/home29" element={<HOME29 />} />

      <Route path="/log-cash-transactions" element={<LogCashTransactions1 />} />

      <Route path="/payment" element={<Payment6 />} />

      <Route path="/split-pay" element={<SplitPay7 />} />

      <Route path="/refer-earn" element={<ReferEarn />} />

      <Route path="/personal-settings" element={<PersonalSettings />} />

      <Route path="/security" element={<Security />} />
    </Routes>
    </ThemeProvider>
    
  );
}
export default App;
