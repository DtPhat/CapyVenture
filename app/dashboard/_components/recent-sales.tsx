import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const salesData = [
  {
    id: 1,
    avatar: '/avatars/01.png',
    name: 'Đoàn Tiến Phát',
    email: 'phatdtse170440@fpt.edu.vn',
    amount: '+500000 VND',
  },
  {
    id: 2,
    avatar: '/avatars/02.png',
    name: 'Nguyễn An Khánh',
    email: 'ankhanh123@email.com',
    amount: '+500000 VND',
  },
  {
    id: 3,
    avatar: '/avatars/03.png',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+500000 VND',
  },
  {
    id: 4,
    avatar: '/avatars/04.png',
    name: 'Trình Vĩnh Phát',
    email: 'phattrinh99@email.com',
    amount: '+500000 VND',
  },
  {
    id: 5,
    avatar: '/avatars/05.png',
    name: 'Hải Đăng',
    email: 'vungochaidang@email.com',
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