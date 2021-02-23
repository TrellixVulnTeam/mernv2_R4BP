import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

import Buttom from '../../common/Button/Button';
import SmallTitle from '../../common/SectionTitle/SectionTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CutText from '../../common/CutText/CutText';
import './PostSummary.scss';

const PostSummary = ({id, title, content}) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{CutText(content,250)}</HtmlBox>
        <Buttom variant="primary" ><Link to={`/posts/${id}`}>Read more</Link></Buttom>
    </article>
);

PostSummary.propTypes = {
    id:PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


export default PostSummary;