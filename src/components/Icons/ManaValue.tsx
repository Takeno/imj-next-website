import Image from 'next/image';
import ManaB from '../../assets/mana/mana-b.svg';
import ManaC from '../../assets/mana/mana-c.svg';
import ManaG from '../../assets/mana/mana-g.svg';
import ManaR from '../../assets/mana/mana-r.svg';
import ManaU from '../../assets/mana/mana-u.svg';
import ManaW from '../../assets/mana/mana-w.svg';
import ManaX from '../../assets/mana/mana-x.svg';

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
};

export default function ManaType({type}: ManaTypeProps) {
  return (
    <Image alt="Mana symbol" src={mana2image[type]} width={14} height={14} />
  );
}
