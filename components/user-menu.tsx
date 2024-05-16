import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  ChevronDown,
  ClipboardList,
  LogOut,
  Settings,
  UserRound
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/providers/auth";
import { useRouter } from 'next/navigation'

const UserMenu = () => {
  const { userInfo, logout } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const anonymous =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_rW9tvc5tzHfImg0xXTReFOQIAuAbt-EXuFdvzgB9g&s";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center rounded bg-transparent hover:bg-slate-50 border p-1 gap-2 justify-between cursor-pointer text-black !bg-foreground">
          <img
            src={userInfo?.picture || anonymous}
            alt="avatar"
            className="rounded-full w-8 h-8"
          />
          <span className="w-32 text-base truncate font-medium">
            {userInfo?.name}
          </span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <UserRound className="w-4 h-4 text-black/70" />
            <div onClick={() => toast({
              variant: "destructive",
              title: "Feature is under development.",
              description: "Please try later!",
            })} >Profile</div>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Settings className="w-4 h-4 text-black/70" />
            <div onClick={() => toast({
              variant: "destructive",
              title: "Feature is under development.",
              description: "Please try later!",
            })} >Setting</div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 hover:!bg-red-50"
          onClick={() => {
            logout()
            router.push('/')
          }}
        >
          <LogOut className="w-4 h-4 text-black/70" />
          <div>Logout</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;