import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import React from "react";

const Buttons = ({title, primary, backgroundColor, size, label, height, style, styles=[], state, type, ...props }) => {
  const heightBtn = height === "md" ? 'h-[48px]' : 'h-[56px]'
  const typeBtn = type === 'round' ? 'rounded-lg' : ' '



  return <div className="flex justify-start gap-12">
    {styles.map((style) => {
      return  (
        <div key={style.title} className="flex justify-center items-center flex-col gap-4 border-">
        <h2 className="text-2xl">{style.title}</h2>
        <button type="button" disabled={style?.disabled} className={`px-3 border border-solid  w-[120px] font-medium text-sm disabled:opacity-50 ${typeBtn} ${heightBtn} ${style?.interface?.bgColor} ${style?.interface?.border} ${style?.interface?.color}`} >
           {style?.loading ? (<Spin indicator={<LoadingOutlined  spin />} size="large"/>) : label}
          </button>
        </div>
      )
    }
   )}
  </div>;
};

export default Buttons;
// h-[${height === 'md' ? '48px' : '56px'}]