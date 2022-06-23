import Image from 'next/image';
import ManaB from '../../assets/mana/mana-b.svg';
import ManaC from '../../assets/mana/mana-c.svg';
import ManaG from '../../assets/mana/mana-g.svg';
import ManaR from '../../assets/mana/mana-r.svg';
import ManaU from '../../assets/mana/mana-u.svg';
import ManaW from '../../assets/mana/mana-w.svg';
import ManaX from '../../assets/mana/mana-x.svg';
import ManaS from '../../assets/mana/mana-s.svg';

import Mana0 from '../../assets/mana/mana-0.svg';
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
  S: ManaS,

  '0': Mana0,
  '1': Mana1,
  '2': Mana2,
  '3': Mana3,
  '4': Mana4,
  '5': Mana5,
  '6': Mana6,
  '7': Mana7,
  '8': Mana8,
  '9': Mana9,
  '10': Mana10,
  '11': Mana11,
  '12': Mana12,
  '13': Mana13,
  '15': Mana15,
  '16': Mana16,
};

export default function ManaType({type}: ManaTypeProps) {
  return (
    <Image alt={`{${type}}`} src={mana2image[type]} width={14} height={14} />
  );
}
