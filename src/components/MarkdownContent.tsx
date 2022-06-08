import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';

type Props = {
  content: MDXRemoteSerializeResult;
};

export default function MarkdownContent({content}: Props) {
  return (
    <div className="prose">
      <MDXRemote {...content} />
    </div>
  );
}
