import clsx from 'clsx'

export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivering: 'Em entrega',
  processing: 'Em preparo',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={clsx('h-2 w-2 rounded-full', {
          'bg-slate-400': status === 'pending',
          'bg-rose-500': status === 'canceled',
          'bg-emerald-500': status === 'delivered',
          'bg-amber-500': status === 'delivering' || status === 'processing',
        })}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
