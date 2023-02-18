import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useHeader_Flex1Cb, usemainflex1Cb, uselogoflex1Cb, usehomedivCb, usemenudivCb, usepagesdivCb, usecartdivCb, usereservatedivCb, useorderonlinedivCb, useabout_DivCb, useFlex22Cb, useFlex23Cb, useDiv47Cb, useDiv48Cb, useDiv50Cb, useDiv51Cb, useFlex24Cb, useDiv52Cb, usehomemenuflexCb, useFlex27Cb, useFlex34Cb, useFlex35Cb, useFlex36Cb, useFlex37Cb, useaboutflex39Cb, useaboutimageflex40Cb, useaboutaddrFlex42Cb, useaddressFlex58Cb, useFlex60Cb, useFlex80Cb, useaboutFlex48Cb, useaboutFlex54Cb, useFlex73Cb, useFlex102Cb, useFlex100Cb, useFlex108Cb, useFlex109Cb, useFlex110Cb, useFlex116Cb, useFlex112Cb, useFlex113Cb, useFlex114Cb, useFlex115Cb, useFlex117Cb, useFlex119Cb, useFlex120Cb, useFlex121Cb, useFlex122Cb, usetestimonialFlex127Cb, usefeedbackFlex134Cb, useFlex137Cb, useFlex138Cb, usemaintestiFlex139Cb, useFlex141Cb, useFlex148Cb, useFlex153Cb, useFlex154Cb, usearticlesFlex162Cb, useourarticlesFlex164Cb, useFlex222Cb, useFlex182Cb, usearticlessFlex183Cb, useFlex187Cb, useFlex221Cb, useFlex188Cb, useFlex194Cb, useFlex195Cb, useFlex204Cb, useFlex202Cb, useFlex211Cb, useCarousel1Cb, useCarousel2Cb, useCarousel3Cb, useCarousel4Cb, useImage1Cb, usehomelinkCb, usemenulinkCb, usepageslinkCb, usecartlinkCb, useReservateCb, useorderonlineCb, useaboutlinkCb, useTextBox12Cb, useImage7Cb, useImage8Cb, useImage9Cb, useImage10Cb, usemenutextdescCb, usebrowsemenutextBox14Cb, useMenutextBox15Cb, usemenutextBox16Cb, useImage22Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useImage21Cb, useTextBox32Cb, useTextBox33Cb, useTextBox34Cb, useImage24Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useImage26Cb, useButton7Cb, useButton8Cb, useaboutImage27Cb, useaboutTextBox42Cb, useImage28Cb, useaddressTextBox43Cb, useTextBox45Cb, useImage30Cb, useImage38Cb, useTextBox56Cb, useaboutTextBox38Cb, useaboutTextBox39Cb, useaboutTextBox40Cb, useaboutButton11Cb, useaboutButton12Cb, usemenuTextBox55Cb, usemenuTextBox57Cb, usemeImage55Cb, useTextBox100Cb, useTextBox101Cb, useclassicTextBox102Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useImage61Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useImage62Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useImage63Cb, useImage64Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useImage65Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useImage66Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useTextBox142Cb, useImage67Cb, useButton14Cb, useButton15Cb, useTextBox143Cb, useTextBox144Cb, useTextBox145Cb, useButton18Cb, useButton19Cb, useImage68Cb, useTextBox149Cb, useTextBox152Cb, useTextBox153Cb, useImage74Cb, useleftarrowImage73Cb, useTextBox157Cb, useTextBox158Cb, useImage84Cb, useImage86Cb, useImage88Cb, useImage87Cb, useImage85Cb, useImage89Cb, useTextBox161Cb, useTextBox162Cb, useButton22Cb, useButton23Cb, useTextBox229Cb, useButton34Cb, useTextBox225Cb, useTextBox226Cb, useImage127Cb, useTextBox228Cb, useImage107Cb, useTextBox169Cb, useTextBox170Cb, useImage108Cb, useTextBox172Cb, useTextBox173Cb, useTextBox191Cb, useTextBox192Cb, useImage114Cb, useImage120Cb, useTextBox208Cb, useTextBox209Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Header_Flex1Props = useStore((state)=>state["Home"]["Header_Flex1"]);
const Header_Flex1IoProps = useIoStore((state)=>state["Home"]["Header_Flex1"]);
const Header_Flex1Cb = useHeader_Flex1Cb()
const mainflex1Props = useStore((state)=>state["Home"]["mainflex1"]);
const mainflex1IoProps = useIoStore((state)=>state["Home"]["mainflex1"]);
const mainflex1Cb = usemainflex1Cb()
const logoflex1Props = useStore((state)=>state["Home"]["logoflex1"]);
const logoflex1IoProps = useIoStore((state)=>state["Home"]["logoflex1"]);
const logoflex1Cb = uselogoflex1Cb()
const homedivProps = useStore((state)=>state["Home"]["homediv"]);
const homedivIoProps = useIoStore((state)=>state["Home"]["homediv"]);
const homedivCb = usehomedivCb()
const menudivProps = useStore((state)=>state["Home"]["menudiv"]);
const menudivIoProps = useIoStore((state)=>state["Home"]["menudiv"]);
const menudivCb = usemenudivCb()
const pagesdivProps = useStore((state)=>state["Home"]["pagesdiv"]);
const pagesdivIoProps = useIoStore((state)=>state["Home"]["pagesdiv"]);
const pagesdivCb = usepagesdivCb()
const cartdivProps = useStore((state)=>state["Home"]["cartdiv"]);
const cartdivIoProps = useIoStore((state)=>state["Home"]["cartdiv"]);
const cartdivCb = usecartdivCb()
const reservatedivProps = useStore((state)=>state["Home"]["reservatediv"]);
const reservatedivIoProps = useIoStore((state)=>state["Home"]["reservatediv"]);
const reservatedivCb = usereservatedivCb()
const orderonlinedivProps = useStore((state)=>state["Home"]["orderonlinediv"]);
const orderonlinedivIoProps = useIoStore((state)=>state["Home"]["orderonlinediv"]);
const orderonlinedivCb = useorderonlinedivCb()
const about_DivProps = useStore((state)=>state["Home"]["about_Div"]);
const about_DivIoProps = useIoStore((state)=>state["Home"]["about_Div"]);
const about_DivCb = useabout_DivCb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div48Props = useStore((state)=>state["Home"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["Home"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Div50Props = useStore((state)=>state["Home"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["Home"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Div51Props = useStore((state)=>state["Home"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["Home"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const homemenuflexProps = useStore((state)=>state["Home"]["homemenuflex"]);
const homemenuflexIoProps = useIoStore((state)=>state["Home"]["homemenuflex"]);
const homemenuflexCb = usehomemenuflexCb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const aboutflex39Props = useStore((state)=>state["Home"]["aboutflex39"]);
const aboutflex39IoProps = useIoStore((state)=>state["Home"]["aboutflex39"]);
const aboutflex39Cb = useaboutflex39Cb()
const aboutimageflex40Props = useStore((state)=>state["Home"]["aboutimageflex40"]);
const aboutimageflex40IoProps = useIoStore((state)=>state["Home"]["aboutimageflex40"]);
const aboutimageflex40Cb = useaboutimageflex40Cb()
const aboutaddrFlex42Props = useStore((state)=>state["Home"]["aboutaddrFlex42"]);
const aboutaddrFlex42IoProps = useIoStore((state)=>state["Home"]["aboutaddrFlex42"]);
const aboutaddrFlex42Cb = useaboutaddrFlex42Cb()
const addressFlex58Props = useStore((state)=>state["Home"]["addressFlex58"]);
const addressFlex58IoProps = useIoStore((state)=>state["Home"]["addressFlex58"]);
const addressFlex58Cb = useaddressFlex58Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const aboutFlex48Props = useStore((state)=>state["Home"]["aboutFlex48"]);
const aboutFlex48IoProps = useIoStore((state)=>state["Home"]["aboutFlex48"]);
const aboutFlex48Cb = useaboutFlex48Cb()
const aboutFlex54Props = useStore((state)=>state["Home"]["aboutFlex54"]);
const aboutFlex54IoProps = useIoStore((state)=>state["Home"]["aboutFlex54"]);
const aboutFlex54Cb = useaboutFlex54Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const testimonialFlex127Props = useStore((state)=>state["Home"]["testimonialFlex127"]);
const testimonialFlex127IoProps = useIoStore((state)=>state["Home"]["testimonialFlex127"]);
const testimonialFlex127Cb = usetestimonialFlex127Cb()
const feedbackFlex134Props = useStore((state)=>state["Home"]["feedbackFlex134"]);
const feedbackFlex134IoProps = useIoStore((state)=>state["Home"]["feedbackFlex134"]);
const feedbackFlex134Cb = usefeedbackFlex134Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const maintestiFlex139Props = useStore((state)=>state["Home"]["maintestiFlex139"]);
const maintestiFlex139IoProps = useIoStore((state)=>state["Home"]["maintestiFlex139"]);
const maintestiFlex139Cb = usemaintestiFlex139Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const articlesFlex162Props = useStore((state)=>state["Home"]["articlesFlex162"]);
const articlesFlex162IoProps = useIoStore((state)=>state["Home"]["articlesFlex162"]);
const articlesFlex162Cb = usearticlesFlex162Cb()
const ourarticlesFlex164Props = useStore((state)=>state["Home"]["ourarticlesFlex164"]);
const ourarticlesFlex164IoProps = useIoStore((state)=>state["Home"]["ourarticlesFlex164"]);
const ourarticlesFlex164Cb = useourarticlesFlex164Cb()
const Flex222Props = useStore((state)=>state["Home"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["Home"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex182Props = useStore((state)=>state["Home"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Home"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const articlessFlex183Props = useStore((state)=>state["Home"]["articlessFlex183"]);
const articlessFlex183IoProps = useIoStore((state)=>state["Home"]["articlessFlex183"]);
const articlessFlex183Cb = usearticlessFlex183Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex221Props = useStore((state)=>state["Home"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Home"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex195Props = useStore((state)=>state["Home"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Home"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex204Props = useStore((state)=>state["Home"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Home"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex202Props = useStore((state)=>state["Home"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Home"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex211Props = useStore((state)=>state["Home"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["Home"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Carousel2Props = useStore((state)=>state["Home"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["Home"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Carousel4Props = useStore((state)=>state["Home"]["Carousel4"]);
const Carousel4IoProps = useIoStore((state)=>state["Home"]["Carousel4"]);
const Carousel4Cb = useCarousel4Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const homelinkProps = useStore((state)=>state["Home"]["homelink"]);
const homelinkIoProps = useIoStore((state)=>state["Home"]["homelink"]);
const homelinkCb = usehomelinkCb()
const menulinkProps = useStore((state)=>state["Home"]["menulink"]);
const menulinkIoProps = useIoStore((state)=>state["Home"]["menulink"]);
const menulinkCb = usemenulinkCb()
const pageslinkProps = useStore((state)=>state["Home"]["pageslink"]);
const pageslinkIoProps = useIoStore((state)=>state["Home"]["pageslink"]);
const pageslinkCb = usepageslinkCb()
const cartlinkProps = useStore((state)=>state["Home"]["cartlink"]);
const cartlinkIoProps = useIoStore((state)=>state["Home"]["cartlink"]);
const cartlinkCb = usecartlinkCb()
const ReservateProps = useStore((state)=>state["Home"]["Reservate"]);
const ReservateIoProps = useIoStore((state)=>state["Home"]["Reservate"]);
const ReservateCb = useReservateCb()
const orderonlineProps = useStore((state)=>state["Home"]["orderonline"]);
const orderonlineIoProps = useIoStore((state)=>state["Home"]["orderonline"]);
const orderonlineCb = useorderonlineCb()
const aboutlinkProps = useStore((state)=>state["Home"]["aboutlink"]);
const aboutlinkIoProps = useIoStore((state)=>state["Home"]["aboutlink"]);
const aboutlinkCb = useaboutlinkCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const menutextdescProps = useStore((state)=>state["Home"]["menutextdesc"]);
const menutextdescIoProps = useIoStore((state)=>state["Home"]["menutextdesc"]);
const menutextdescCb = usemenutextdescCb()
const browsemenutextBox14Props = useStore((state)=>state["Home"]["browsemenutextBox14"]);
const browsemenutextBox14IoProps = useIoStore((state)=>state["Home"]["browsemenutextBox14"]);
const browsemenutextBox14Cb = usebrowsemenutextBox14Cb()
const MenutextBox15Props = useStore((state)=>state["Home"]["MenutextBox15"]);
const MenutextBox15IoProps = useIoStore((state)=>state["Home"]["MenutextBox15"]);
const MenutextBox15Cb = useMenutextBox15Cb()
const menutextBox16Props = useStore((state)=>state["Home"]["menutextBox16"]);
const menutextBox16IoProps = useIoStore((state)=>state["Home"]["menutextBox16"]);
const menutextBox16Cb = usemenutextBox16Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const aboutImage27Props = useStore((state)=>state["Home"]["aboutImage27"]);
const aboutImage27IoProps = useIoStore((state)=>state["Home"]["aboutImage27"]);
const aboutImage27Cb = useaboutImage27Cb()
const aboutTextBox42Props = useStore((state)=>state["Home"]["aboutTextBox42"]);
const aboutTextBox42IoProps = useIoStore((state)=>state["Home"]["aboutTextBox42"]);
const aboutTextBox42Cb = useaboutTextBox42Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const addressTextBox43Props = useStore((state)=>state["Home"]["addressTextBox43"]);
const addressTextBox43IoProps = useIoStore((state)=>state["Home"]["addressTextBox43"]);
const addressTextBox43Cb = useaddressTextBox43Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const aboutTextBox38Props = useStore((state)=>state["Home"]["aboutTextBox38"]);
const aboutTextBox38IoProps = useIoStore((state)=>state["Home"]["aboutTextBox38"]);
const aboutTextBox38Cb = useaboutTextBox38Cb()
const aboutTextBox39Props = useStore((state)=>state["Home"]["aboutTextBox39"]);
const aboutTextBox39IoProps = useIoStore((state)=>state["Home"]["aboutTextBox39"]);
const aboutTextBox39Cb = useaboutTextBox39Cb()
const aboutTextBox40Props = useStore((state)=>state["Home"]["aboutTextBox40"]);
const aboutTextBox40IoProps = useIoStore((state)=>state["Home"]["aboutTextBox40"]);
const aboutTextBox40Cb = useaboutTextBox40Cb()
const aboutButton11Props = useStore((state)=>state["Home"]["aboutButton11"]);
const aboutButton11IoProps = useIoStore((state)=>state["Home"]["aboutButton11"]);
const aboutButton11Cb = useaboutButton11Cb()
const aboutButton12Props = useStore((state)=>state["Home"]["aboutButton12"]);
const aboutButton12IoProps = useIoStore((state)=>state["Home"]["aboutButton12"]);
const aboutButton12Cb = useaboutButton12Cb()
const menuTextBox55Props = useStore((state)=>state["Home"]["menuTextBox55"]);
const menuTextBox55IoProps = useIoStore((state)=>state["Home"]["menuTextBox55"]);
const menuTextBox55Cb = usemenuTextBox55Cb()
const menuTextBox57Props = useStore((state)=>state["Home"]["menuTextBox57"]);
const menuTextBox57IoProps = useIoStore((state)=>state["Home"]["menuTextBox57"]);
const menuTextBox57Cb = usemenuTextBox57Cb()
const meImage55Props = useStore((state)=>state["Home"]["meImage55"]);
const meImage55IoProps = useIoStore((state)=>state["Home"]["meImage55"]);
const meImage55Cb = usemeImage55Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const classicTextBox102Props = useStore((state)=>state["Home"]["classicTextBox102"]);
const classicTextBox102IoProps = useIoStore((state)=>state["Home"]["classicTextBox102"]);
const classicTextBox102Cb = useclassicTextBox102Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox152Props = useStore((state)=>state["Home"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Home"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["Home"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const leftarrowImage73Props = useStore((state)=>state["Home"]["leftarrowImage73"]);
const leftarrowImage73IoProps = useIoStore((state)=>state["Home"]["leftarrowImage73"]);
const leftarrowImage73Cb = useleftarrowImage73Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const Image84Props = useStore((state)=>state["Home"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home"]["Image84"]);
const Image84Cb = useImage84Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const Image88Props = useStore((state)=>state["Home"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home"]["Image88"]);
const Image88Cb = useImage88Cb()
const Image87Props = useStore((state)=>state["Home"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Home"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["Home"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["Home"]["Button23"]);
const Button23Cb = useButton23Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const Button34Props = useStore((state)=>state["Home"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["Home"]["Button34"]);
const Button34Cb = useButton34Cb()
const TextBox225Props = useStore((state)=>state["Home"]["TextBox225"]);
const TextBox225IoProps = useIoStore((state)=>state["Home"]["TextBox225"]);
const TextBox225Cb = useTextBox225Cb()
const TextBox226Props = useStore((state)=>state["Home"]["TextBox226"]);
const TextBox226IoProps = useIoStore((state)=>state["Home"]["TextBox226"]);
const TextBox226Cb = useTextBox226Cb()
const Image127Props = useStore((state)=>state["Home"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Home"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox228Props = useStore((state)=>state["Home"]["TextBox228"]);
const TextBox228IoProps = useIoStore((state)=>state["Home"]["TextBox228"]);
const TextBox228Cb = useTextBox228Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const Image114Props = useStore((state)=>state["Home"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Home"]["Image114"]);
const Image114Cb = useImage114Cb()
const Image120Props = useStore((state)=>state["Home"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Home"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()

  return (<>
  <Flex className="p-Home mainflex1 bpt" {...mainflex1Props} {...mainflex1Cb} {...mainflex1IoProps}>
<Flex className="p-Home logoflex1 bpt" {...logoflex1Props} {...logoflex1Cb} {...logoflex1IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
<Div className="p-Home homediv bpt" {...homedivProps} {...homedivCb} {...homedivIoProps}>
<Link className="p-Home homelink bpt" {...homelinkProps} {...homelinkCb} {...homelinkIoProps}/>
</Div>
<Div className="p-Home about_Div bpt" {...about_DivProps} {...about_DivCb} {...about_DivIoProps}>
<Link className="p-Home aboutlink bpt" {...aboutlinkProps} {...aboutlinkCb} {...aboutlinkIoProps}/>
</Div>
<Div className="p-Home menudiv bpt" {...menudivProps} {...menudivCb} {...menudivIoProps}>
<Link className="p-Home menulink bpt" {...menulinkProps} {...menulinkCb} {...menulinkIoProps}/>
</Div>
<Div className="p-Home pagesdiv bpt" {...pagesdivProps} {...pagesdivCb} {...pagesdivIoProps}>
<Link className="p-Home pageslink bpt" {...pageslinkProps} {...pageslinkCb} {...pageslinkIoProps}/>
</Div>
<Div className="p-Home cartdiv bpt" {...cartdivProps} {...cartdivCb} {...cartdivIoProps}>
<Link className="p-Home cartlink bpt" {...cartlinkProps} {...cartlinkCb} {...cartlinkIoProps}/>
</Div>
<Div className="p-Home orderonlinediv bpt" {...orderonlinedivProps} {...orderonlinedivCb} {...orderonlinedivIoProps}>
<Button className="p-Home orderonline bpt" {...orderonlineProps} {...orderonlineCb} {...orderonlineIoProps}/>
</Div>
<Div className="p-Home reservatediv bpt" {...reservatedivProps} {...reservatedivCb} {...reservatedivIoProps}>
<Button className="p-Home Reservate bpt" {...ReservateProps} {...ReservateCb} {...ReservateIoProps}/>
</Div>
</Flex>
<Carousel className="p-Home Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
<Flex className="p-Home Header_Flex1 bpt" {...Header_Flex1Props} {...Header_Flex1Cb} {...Header_Flex1IoProps}>
<Carousel className="p-Home Carousel4 bpt" {...Carousel4Props} {...Carousel4Cb} {...Carousel4IoProps}/>
</Flex>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Carousel className="p-Home Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Div>
<Div className="p-Home Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Div>
<Div className="p-Home Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Div>
<Div className="p-Home Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox className="p-Home menutextdesc bpt" {...menutextdescProps} {...menutextdescCb} {...menutextdescIoProps}/>
</Div>
</Flex>
<Flex className="p-Home homemenuflex bpt" {...homemenuflexProps} {...homemenuflexCb} {...homemenuflexIoProps}>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home browsemenutextBox14 bpt" {...browsemenutextBox14Props} {...browsemenutextBox14Cb} {...browsemenutextBox14IoProps}/>
<TextBox className="p-Home MenutextBox15 bpt" {...MenutextBox15Props} {...MenutextBox15Cb} {...MenutextBox15IoProps}/>
<TextBox className="p-Home menutextBox16 bpt" {...menutextBox16Props} {...menutextBox16Cb} {...menutextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
<Flex className="p-Home aboutflex39 bpt" {...aboutflex39Props} {...aboutflex39Cb} {...aboutflex39IoProps}>
<Flex className="p-Home aboutimageflex40 bpt" {...aboutimageflex40Props} {...aboutimageflex40Cb} {...aboutimageflex40IoProps}>
<Image className="p-Home aboutImage27 bpt" {...aboutImage27Props} {...aboutImage27Cb} {...aboutImage27IoProps}/>
</Flex>
<Flex className="p-Home aboutaddrFlex42 bpt" {...aboutaddrFlex42Props} {...aboutaddrFlex42Cb} {...aboutaddrFlex42IoProps}>
<TextBox className="p-Home aboutTextBox42 bpt" {...aboutTextBox42Props} {...aboutTextBox42Cb} {...aboutTextBox42IoProps}/>
<Flex className="p-Home addressFlex58 bpt" {...addressFlex58Props} {...addressFlex58Cb} {...addressFlex58IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<TextBox className="p-Home addressTextBox43 bpt" {...addressTextBox43Props} {...addressTextBox43Cb} {...addressTextBox43IoProps}/>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home aboutFlex48 bpt" {...aboutFlex48Props} {...aboutFlex48Cb} {...aboutFlex48IoProps}>
<TextBox className="p-Home aboutTextBox38 bpt" {...aboutTextBox38Props} {...aboutTextBox38Cb} {...aboutTextBox38IoProps}/>
<TextBox className="p-Home aboutTextBox39 bpt" {...aboutTextBox39Props} {...aboutTextBox39Cb} {...aboutTextBox39IoProps}/>
<TextBox className="p-Home aboutTextBox40 bpt" {...aboutTextBox40Props} {...aboutTextBox40Cb} {...aboutTextBox40IoProps}/>
<Flex className="p-Home aboutFlex54 bpt" {...aboutFlex54Props} {...aboutFlex54Cb} {...aboutFlex54IoProps}>
<Button className="p-Home aboutButton11 bpt" {...aboutButton11Props} {...aboutButton11Cb} {...aboutButton11IoProps}/>
<Button className="p-Home aboutButton12 bpt" {...aboutButton12Props} {...aboutButton12Cb} {...aboutButton12IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home menuTextBox55 bpt" {...menuTextBox55Props} {...menuTextBox55Cb} {...menuTextBox55IoProps}/>
<TextBox className="p-Home menuTextBox57 bpt" {...menuTextBox57Props} {...menuTextBox57Cb} {...menuTextBox57IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Image className="p-Home meImage55 bpt" {...meImage55Props} {...meImage55Cb} {...meImage55IoProps}/>
<TextBox className="p-Home classicTextBox102 bpt" {...classicTextBox102Props} {...classicTextBox102Cb} {...classicTextBox102IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
</Flex>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home testimonialFlex127 bpt" {...testimonialFlex127Props} {...testimonialFlex127Cb} {...testimonialFlex127IoProps}>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox className="p-Home TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox className="p-Home TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
</Flex>
<Flex className="p-Home feedbackFlex134 bpt" {...feedbackFlex134Props} {...feedbackFlex134Cb} {...feedbackFlex134IoProps}>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Image className="p-Home leftarrowImage73 bpt" {...leftarrowImage73Props} {...leftarrowImage73Cb} {...leftarrowImage73IoProps}/>
</Flex>
<Flex className="p-Home maintestiFlex139 bpt" {...maintestiFlex139Props} {...maintestiFlex139Cb} {...maintestiFlex139IoProps}>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image className="p-Home Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Image className="p-Home Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<Image className="p-Home Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Flex>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button className="p-Home Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home articlesFlex162 bpt" {...articlesFlex162Props} {...articlesFlex162Cb} {...articlesFlex162IoProps}>
<Flex className="p-Home ourarticlesFlex164 bpt" {...ourarticlesFlex164Props} {...ourarticlesFlex164Cb} {...ourarticlesFlex164IoProps}>
<Flex className="p-Home Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<Button className="p-Home Button34 bpt" {...Button34Props} {...Button34Cb} {...Button34IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex className="p-Home articlessFlex183 bpt" {...articlessFlex183Props} {...articlessFlex183Cb} {...articlessFlex183IoProps}>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Flex className="p-Home Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Image className="p-Home Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox className="p-Home TextBox226 bpt" {...TextBox226Props} {...TextBox226Cb} {...TextBox226IoProps}/>
<TextBox className="p-Home TextBox225 bpt" {...TextBox225Props} {...TextBox225Cb} {...TextBox225IoProps}/>
<TextBox className="p-Home TextBox228 bpt" {...TextBox228Props} {...TextBox228Cb} {...TextBox228IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Flex className="p-Home Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Image className="p-Home Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Flex>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Flex className="p-Home Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Image className="p-Home Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Flex>
<Flex className="p-Home Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Image className="p-Home Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
