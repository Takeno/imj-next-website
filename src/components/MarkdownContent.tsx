import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import ManaType from './Icons/ManaValue';
import Tap from './Icons/Tap';

type Props = {
  content: MDXRemoteSerializeResult;
};

const MagicCard = function ({children}: {children: string}) {
  return (
    <a
      href={`https://gatherer.wizards.com/Pages/Card/Details.aspx?name=${encodeURIComponent(
        children
      )}`}
      target="_blank"
      rel="noreferrer"
      data-html={true}
      data-tip={`<img src="https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=${encodeURIComponent(
        children
      )}" />`}
    >
      {children}
    </a>
  );
};

const components = {
  Card: MagicCard,
};

const scope = {
  W: <ManaType type="W" />,
  U: <ManaType type="U" />,
  B: <ManaType type="B" />,
  R: <ManaType type="R" />,
  G: <ManaType type="G" />,
  X: <ManaType type="X" />,
  C: <ManaType type="C" />,
  S: <ManaType type="S" />,

  C0: <ManaType type="0" />,
  C1: <ManaType type="1" />,
  C2: <ManaType type="2" />,
  C3: <ManaType type="3" />,
  C4: <ManaType type="4" />,
  C5: <ManaType type="5" />,
  C6: <ManaType type="6" />,
  C7: <ManaType type="7" />,
  C8: <ManaType type="8" />,
  C9: <ManaType type="9" />,
  C10: <ManaType type="10" />,
  C11: <ManaType type="11" />,
  C12: <ManaType type="12" />,
  C13: <ManaType type="13" />,
  C15: <ManaType type="15" />,
  C16: <ManaType type="16" />,

  TAP: <Tap />,
};

export default function MarkdownContent({content}: Props) {
  return (
    <div className="prose max-w-none">
      <MDXRemote components={components} {...content} scope={scope} />
    </div>
  );
}

export function prepareMarkdownContent(content: string) {
  return serialize(content.replace(/\{([0-9]{1,2})\}/g, '{C$1}'));
}
