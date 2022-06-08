import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';

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

export default function MarkdownContent({content}: Props) {
  return (
    <div className="prose">
      <MDXRemote components={components} {...content} />
    </div>
  );
}
