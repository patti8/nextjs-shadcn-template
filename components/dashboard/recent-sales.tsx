import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 min-w-0 flex-1">
          <p className="text-sm font-medium leading-none truncate">Jane Miller</p>
          <p className="text-sm text-muted-foreground truncate">jane.miller@example.com</p>
        </div>
        <div className="ml-auto font-medium whitespace-nowrap">+$249.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 min-w-0 flex-1">
          <p className="text-sm font-medium leading-none truncate">Robert Brown</p>
          <p className="text-sm text-muted-foreground truncate">robert.brown@example.com</p>
        </div>
        <div className="ml-auto font-medium whitespace-nowrap">+$199.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 min-w-0 flex-1">
          <p className="text-sm font-medium leading-none truncate">Sarah Davis</p>
          <p className="text-sm text-muted-foreground truncate">sarah.davis@example.com</p>
        </div>
        <div className="ml-auto font-medium whitespace-nowrap">+$399.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1 min-w-0 flex-1">
          <p className="text-sm font-medium leading-none truncate">Michael Wilson</p>
          <p className="text-sm text-muted-foreground truncate">michael.wilson@example.com</p>
        </div>
        <div className="ml-auto font-medium whitespace-nowrap">+$149.00</div>
      </div>
    </div>
  )
}

