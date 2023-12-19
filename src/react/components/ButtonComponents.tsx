

interface ButttonProps<T> {
    label: T
    width: T
}

const ButtonComponents = ({label, width}: ButttonProps<number | string>) => {
  return (
    <button className={`bg-second px-6 py-4 rounded-s text-textColor-colorThree ${width}
    text-center text-lg font-normal uppercase tracking-[1px]`}>
      {label}
    </button>
  )
}

export default ButtonComponents
