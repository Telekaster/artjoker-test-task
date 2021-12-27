import validation from "./validation";
import bonusHundred from "../scheme/bonusHundred";
import bonusThousand from "../scheme/bonusThousand";
import bonusTwoThousand from "../scheme/bonusTwoThousand";

export default function decryptor(code, setResult) {
  const promoCode = validation(code);
  console.log("Промокод", promoCode);

  if (promoCode) {
    bonusHundred(promoCode, setResult);
    bonusThousand(promoCode, setResult);
    bonusTwoThousand(promoCode, setResult);
  } else {
    setResult(promoCode);
  }
}
