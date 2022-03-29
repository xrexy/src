type LoginUser = {
  email: string;
  password: string;
};

type User = {
  email: string;
  tokens: number;
  userId: string;
};

type NavbarLink = {
  icon: any;
  label: string;
  notifications?: number;
  children?: React.ReactNode[];
};

type NavbarCollection = {
  emoji: string;
  label: string;
};

type SpotlightActionPrimitive = {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
  group?: string;
  keywords?: string | string[];
};

type Fundraiser = {
  fundraiserId: string;
  createdBy: string;
  title: string;
  content: string;
};

type FundraiserResponse = {
  isSingular: true;
  data: Fundraiser[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pages: number;
};
