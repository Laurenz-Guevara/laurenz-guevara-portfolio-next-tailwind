import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node: any, text: any) => {
      return <ul className="pl-6 [&>li]:list-disc [&>li]:pb-1">{text}</ul>;
    },
  },
};

const RichText = ({ content }: any) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
