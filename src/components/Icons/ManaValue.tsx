import Image from 'next/image';
import ManaB from '../../assets/mana/mana-b.svg';
import ManaC from '../../assets/mana/mana-c.svg';
import ManaG from '../../assets/mana/mana-g.svg';
import ManaR from '../../assets/mana/mana-r.svg';
import ManaU from '../../assets/mana/mana-u.svg';
import ManaW from '../../assets/mana/mana-w.svg';
import ManaX from '../../assets/mana/mana-x.svg';

import Mana1 from '../../assets/mana/mana-1.svg';
import Mana2 from '../../assets/mana/mana-2.svg';
import Mana3 from '../../assets/mana/mana-3.svg';
import Mana4 from '../../assets/mana/mana-4.svg';
import Mana5 from '../../assets/mana/mana-5.svg';
import Mana6 from '../../assets/mana/mana-6.svg';
import Mana7 from '../../assets/mana/mana-7.svg';
import Mana8 from '../../assets/mana/mana-8.svg';
import Mana9 from '../../assets/mana/mana-9.svg';
import Mana10 from '../../assets/mana/mana-10.svg';
import Mana11 from '../../assets/mana/mana-11.svg';
import Mana12 from '../../assets/mana/mana-12.svg';
import Mana13 from '../../assets/mana/mana-13.svg';
import Mana15 from '../../assets/mana/mana-15.svg';
import Mana16 from '../../assets/mana/mana-16.svg';

interface ManaTypeProps {
  type: ManaType;
}

const mana2image: Record<ManaType, string> = {
  B: ManaB,
  G: ManaG,
  C: ManaC,
  R: ManaR,
  U: ManaU,
  W: ManaW,
  X: ManaX,

  C1: Mana1,
  C2: Mana2,
  C3: Mana3,
  C4: Mana4,
  C5: Mana5,
  C6: Mana6,
  C7: Mana7,
  C8: Mana8,
  C9: Mana9,
  C10: Mana10,
  C11: Mana11,
  C12: Mana12,
  C13: Mana13,
  C15: Mana15,
  C16: Mana16,
};

export default function ManaType({type}: ManaTypeProps) {
  return (
    <Image alt="Mana symbol" src={mana2image[type]} width={14} height={14} />
  );
}
