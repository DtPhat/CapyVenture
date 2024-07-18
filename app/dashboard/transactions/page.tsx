"use client"
import ButtonIcon from "@/components/button-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { ArrowLeft, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Status", "Amount", "Date", "Action"];

export const TABLE_ROWS = [

  {
    img: "https://random-image.jpg",
    name: "Nguyễn Văn Quân",
    email: "quannv26042003@gmail.com",
    completed: true,
    date: "18/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Trần Thị Lan",
    email: "tranlan77@gmail.com",
    completed: true,
    date: "18/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Văn Hoàng",
    email: "levanhoang1985@gmail.com",
    completed: true,
    date: "16/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Thị Nga",
    email: "nga.pham123@gmail.com",
    completed: true,
    date: "15/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Hoàng Văn Lâm",
    email: "hoang.lam1960@gmail.com",
    completed: true,
    date: "14/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Thị Mai",
    email: "mai.nguyen890@gmail.com",
    completed: true,
    date: "14/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Vũ Văn Nam",
    email: "vnam1987@gmail.com",
    completed: true,
    date: "14/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Đỗ Văn Phúc",
    email: "dovanphuc567@gmail.com",
    completed: true,
    date: "11/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Thị Hoa",
    email: "phamhoa11@gmail.com",
    completed: true,
    date: "11/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Thị Huệ",
    email: "hue.le1975@gmail.com",
    completed: true,
    date: "09/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Văn Đức",
    email: "nguyenvanduc1989@gmail.com",
    completed: true,
    date: "08/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Trần Văn Bình",
    email: "tranbinh2020@gmail.com",
    completed: true,
    date: "07/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Thị Thanh",
    email: "lethithanh88@gmail.com",
    completed: true,
    date: "07/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Thị Ngọc",
    email: "ngoc.nguyen777@gmail.com",
    completed: true,
    date: "05/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Văn An",
    email: "phanvanan2015@gmail.com",
    completed: true,
    date: "04/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Hoàng Thị Bảo",
    email: "hoangbao1982@gmail.com",
    completed: true,
    date: "03/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Văn Cường",
    email: "nguyenvancuong99@gmail.com",
    completed: true,
    date: "03/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Trần Thị Hương",
    email: "huong17042004@gmail.com",
    completed: true,
    date: "01/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Văn Thanh",
    email: "levanthanh123@gmail.com",
    completed: true,
    date: "18/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Thị Quỳnh",
    email: "phamquynh1992@gmail.com",
    completed: true,
    date: "17/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Hoàng Văn Tâm",
    email: "hoang.tam1986@gmail.com",
    completed: true,
    date: "16/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Thị Thảo",
    email: "nguyenthithao2024@gmail.com",
    completed: true,
    date: "15/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Vũ Văn Dũng",
    email: "vudung76@gmail.com",
    completed: true,
    date: "14/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Đỗ Thị Hồng",
    email: "dothihong54@gmail.com",
    completed: true,
    date: "13/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Văn Tú",
    email: "phamtuvt@gmail.com",
    completed: true,
    date: "12/07/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Thị Kim",
    email: "kimle1989@gmail.com",
    completed: true,
    date: "11/07/2024",
    amount: 50000,
  },
  // Phrase 2:
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Văn Anh",
    email: "nguyenvananh123@gmail.com",
    completed: true,
    date: "30/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Trần Thị Bích",
    email: "bichtran91@gmail.com",
    completed: true,
    date: "30/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Lê Văn Đức",
    email: "levanduc83@gmail.com",
    completed: true,
    date: "28/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Thị Hà",
    email: "phamthiha22@gmail.com",
    completed: true,
    date: "24/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Hoàng Văn Hoàng",
    email: "hoangvanhoang78@gmail.com",
    completed: true,
    date: "24/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Nguyễn Thị Hương",
    email: "nguyenthihuong2023@gmail.com",
    completed: true,
    date: "24/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Vũ Văn Khánh",
    email: "vuvankhanh1994@gmail.com",
    completed: true,
    date: "24/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Đỗ Thị Lan",
    email: "dothilan90@gmail.com",
    completed: true,
    date: "22/06/2024",
    amount: 50000,
  },
  {
    img: "https://random-image.jpg",
    name: "Phạm Văn Minh",
    email: "minhpham.greenhouse@gmail.com",
    completed: true,
    date: "22/06/2024",
    amount: 50000,
  },
];

const totalPages = 4;
export default function SortableTable() {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Card className="h-full w-full p-4 m-4">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div className="flex gap-6">
            <Link href="/dashboard">
              <IconButton className="size-20 rounded-full p-2" variant="outlined">
                <ArrowLeft className="" />
              </IconButton>
            </Link>
            <div>
              <Typography variant="h5" color="blue-gray">
                Transaction History
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all transaction.
              </Typography>
            </div>
          </div>
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div className="w-full md:w-96">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10).map(
              ({ img, name, email, completed, amount, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={img} alt="Avatar" />
                          <AvatarFallback>
                            {name.charAt(0).toUpperCase() +
                              name.charAt(name.indexOf(' ') + 1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={completed ? "Completed" : "offline"}
                          color={completed ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {amount} VND
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
            Previous
          </Button>
          <Button variant="outlined" size="sm" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}