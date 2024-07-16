import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const salesData = [
  {
    id: 1,
    avatar: '/avatars/01.png',
    name: 'Nguyễn Văn Quân',
    email: 'nguyenvanquan@gmail.com',
    amount: '+500000 VND',
  },
  {
    id: 2,
    avatar: '/avatars/02.png',
    name: 'Trần Thị Lan',
    email: 'tranthilan@gmail.com',
    amount: '+500000 VND',
  },
  {
    id: 3,
    avatar: '/avatars/03.png',
    name: 'Lê Văn Hoàng',
    email: 'levanhoang@gmail.com',
    amount: '+500000 VND',
  },
  {
    id: 4,
    avatar: '/avatars/04.png',
    name: 'Hoàng Văn Lâm',
    email: 'hoangvanlam@gmail.com',
    amount: '+500000 VND',
  },
  {
    id: 5,
    avatar: '/avatars/05.png',
    name: 'Nguyễn Thị Mai',
    email: 'nguyenthimai@gmail.com',
    amount: '+500000 VND',
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {salesData.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatar} alt="Avatar" />
            <AvatarFallback>
              {sale.name.charAt(0).toUpperCase() +
                sale.name.charAt(sale.name.indexOf(' ') + 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}