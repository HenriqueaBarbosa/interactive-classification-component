interface Props {
    content: string;
    onClick: () => void;
}

export default function Button(props: Props) {
    return (
      <button className={`
        flex justify-center items-center
        bg-[#F26716] text-[#FFF]
        font-bold tracking-widest
        w-full h-10 rounded-3xl
      `} onClick={() => props.onClick()}>
        {props.content}
      </button>
    )
  }

  