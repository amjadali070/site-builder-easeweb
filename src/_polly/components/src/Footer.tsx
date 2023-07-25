import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"
import Footer4 from "./Footer4"

export default function Footer(props: any) {
  const { style, info } = props
  
  return style === 'FOOTER1' ? (
    <Footer1 info={info} />
  ) : style === 'FOOTER2' ? (
    <Footer2 info={info} />
  ) : style === 'FOOTER3' ? (
    <Footer3 info={info} />
  ): style === 'FOOTER4' ? (
    <Footer4 info={info} />
  ) : null
}