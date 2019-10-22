import React from "react";
import DescContainer from "../../Home/Short";
import ProfilePreview from "../../Profile/HomePreview";
import { useHistory } from 'react-router-dom';

const db = [
  {
    id: 1,
    img: {
      src: "https://stanleybulldogs.com/static/media/stanley.47c7c736.jpg",
      alt: "st"
    },
    info: {
      name: "Stanley",
      desc:
        "3/4 English Bulldog, 1/4 Purple-Ribbon Blue Nose Pit Hybrid (Bred for size and health)"
    }
  },
  {
    id: 2,
    img: {
      src: "https://stanleybulldogs.com/static/media/hannah.b9f470dd.jpg",
      alt: "hn"
    },
    info: {
      name: "Hannah",
      desc: "Olde English Bulldogge"
    }
  }
];

const Left = () => (
  <>
    {db.map(doggy => <ProfilePreview key={doggy.id} {...doggy} />)}
    <ViewAll />
  </>
);
const ViewAll = () => {
  const history = useHistory();
  return(
    <div className='mt-2'>
      <button
        onClick={()=>history.push('/parents')} 
        className='btn btn-sm btn-warning'>See all parents</button>
    </div>
  );
};

const Right = () => (
  <div>
    A diam maecenas sed enim. Sollicitudin tempor id eu nisl. Sapien et ligula
    ullamcorper malesuada proin. Orci sagittis eu volutpat odio facilisis. Risus
    sed vulputate odio ut enim blandit volutpat maecenas. Eros donec ac odio
    tempor orci dapibus. Vitae purus faucibus ornare suspendisse sed nisi lacus
    sed viverra. Nibh cras pulvinar mattis nunc.
  </div>
);

const Brief = () => (
  <DescContainer 
    title="Parents"
    left={<Left />}
    right={<Right />} />
);

export default Brief;

