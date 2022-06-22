import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
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
  // I: <ManaType type="I" />,
};

export default function MarkdownContent({content}: Props) {
  return (
    <div className="prose">
      <MDXRemote components={components} {...content} scope={scope} />
    </div>
  );
}
