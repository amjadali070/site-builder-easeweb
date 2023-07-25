import clsx from 'clsx'

export default function Image(props: any) {
  const { className, ...rest } = props
  return <img className={clsx('w-full', className)} alt="" {...rest} />
}
