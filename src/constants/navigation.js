/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: 'img/icon/home.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
  // {
  //   id: 'profile',
  //   icon: '/img/people.svg',
  //   label: 'navBar.profile',
  //   to: '/profile'
  // },
  // {
  //   id: 'tictactoe',
  //   icon: '/img/icon/tictactoe.svg',
  //   label: 'navBar.tictactoe',
  //   to: '/tictactoe'
  // },
  // {
  //   id: 'text-editor',
  //   icon: '/img/icon/files.svg',
  //   label: 'navBar.text-editor',
  //   to: '/text-editor'
  // },
  {
    id: 'timeline',
    icon: 'img/icon/inicio.svg',
    label: 'navBar.timeline',
    to: '/timeline'
  },
  // {
  //   id: 'route',
  //   icon: '/img/icon/files.svg',
  //   label: 'route',
  //   to: '/route'
  // },
  {
    id: 'friends',
    icon: 'img/icon/friend.svg',
    label: 'navBar.friends',
    to: '/friends'
  },
  {
    id: 'createroute',
    icon: 'img/icon/ruta.svg',
    label: 'navBar.createroute',
    to: '/createroute'
  }
];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.formModelConvert',
    onClick: 'formModelConvertRedirect'
  },
  {
    label: 'navBar.formModelRender',
    onClick: 'formModelRenderRedirect'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
