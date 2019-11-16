import React from 'react';
import DescContainer from '../../Home/Short';

const Left = () => (
  <>
    <DescContainer.Title title={'About'} />
  </>
);
const Right = ({ description }) => <div>{description.text}</div>;

const Brief = ({ about }) => (
  <DescContainer
    title="About"
    left={<Left />}
    right={<Right description={about.description} />}
  />
);

export default Brief;
