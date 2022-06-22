import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import ManaType from './Icons/ManaValue';

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
  C1: <ManaType type="C1" />,
  C2: <ManaType type="C2" />,
  C3: <ManaType type="C3" />,
  C4: <ManaType type="C4" />,
  C5: <ManaType type="C5" />,
  C6: <ManaType type="C6" />,
  C7: <ManaType type="C7" />,
  C8: <ManaType type="C8" />,
  C9: <ManaType type="C9" />,
  C10: <ManaType type="C10" />,
  C11: <ManaType type="C11" />,
  C12: <ManaType type="C12" />,
  C13: <ManaType type="C13" />,
  C15: <ManaType type="C15" />,
  C16: <ManaType type="C16" />,
};

export default function MarkdownContent({content}: Props) {
  return (
    <div className="prose max-w-none">
      <MDXRemote components={components} {...content} scope={scope} />
    </div>
  );
}

export function prepareMarkdownContent(content: string) {
  return serialize(content.replace(/\{([0-9]{1,2})\}/, '{C$1}'));
}
