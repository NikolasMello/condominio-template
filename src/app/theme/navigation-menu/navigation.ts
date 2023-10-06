import { faHome,
         faEdit,
         faHandPointer,
         faGear,
         faPerson,
         faFileLines,
         faSquarePollVertical,
         faUser,
         faUserGroup,
         faChartLine,
         faBuilding,
         faCommentDots,
         faBan,
         faRoadBarrier,
         faRightFromBracket,
         faClipboardList,
         faRankingStar,
         faUserPen,
         faArrowsRotate,
         faCar,
         faAddressBook,
         faHouseUser,
         faUserTie,
         faUsers,
         faUsersSlash,
         faPersonMilitaryToPerson,
         faHandPointRight,
         faFileCircleCheck,
         faFilePen,
         faKey,
         IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface NavigationItem {
    id: string;
    title: string;
    icon: IconDefinition;
    url: string;
    active?: boolean;
    itens: SideNavItem[]
  }

export interface SideNavItem {
    id: string;
    title: string;
    icon: IconDefinition;
    url: string;
    hasChild: boolean;
    subItens: SideNavSubItem[]
}

export interface SideNavSubItem {
    id: string;
    title: string;
    url: string; 
}
  
export class NavigationMenu {

    faHome: IconDefinition = faHome;
    faEdit: IconDefinition = faEdit;
    faHandPointer: IconDefinition = faHandPointer;
    faGear: IconDefinition = faGear;
    faPerson: IconDefinition = faPerson;
    faFileLines: IconDefinition = faFileLines;
    faUser: IconDefinition = faUser;
    faUserGroup: IconDefinition = faUserGroup;
    faBuilding: IconDefinition = faBuilding;
    faChartLine: IconDefinition = faChartLine;
    faCommentDots: IconDefinition = faCommentDots;
    faBan: IconDefinition = faBan;
    faRoadBarrier: IconDefinition = faRoadBarrier;
    faRightFromBracket: IconDefinition = faRightFromBracket;
    faClipboardList: IconDefinition = faClipboardList;
    faRankingStar: IconDefinition = faRankingStar;
    faUserPen: IconDefinition = faUserPen;
    faArrowsRotate: IconDefinition = faArrowsRotate;
    faCar: IconDefinition =  faCar;
    faAddressBook: IconDefinition = faAddressBook;
    faHouseUser: IconDefinition = faHouseUser;
    faUserTie: IconDefinition = faUserTie;
    faUsers: IconDefinition = faUsers;
    faUsersSlash: IconDefinition = faUsersSlash;
    faPersonMilitaryToPerson: IconDefinition = faPersonMilitaryToPerson;
    faHandPointRight: IconDefinition = faHandPointRight;
    faFileCircleCheck: IconDefinition = faFileCircleCheck;
    faSquarePollVertical: IconDefinition = faSquarePollVertical;
    faFilePen: IconDefinition = faFilePen;
    faKey: IconDefinition = faKey;

  private navigationItems: NavigationItem[] = [
    {
        id: 'nav-home',
        title: 'Home',
        url: '/home',
        icon: faHome,
        itens:[
            {
                id: 'nav-home',
                title: 'Dashboard',
                url: '/home',
                icon: faSquarePollVertical,
                hasChild: false,
                subItens:[ ]
            },
        ]
    },
    {
        id: 'nav-cadastro',
        title: 'Cadastro',
        url: '/cadastro',
        icon: faEdit,
        itens:[
            {
                id: 'nav-pessoa',
                title: 'Pessoa',
                url: '/cadastro/pessoa',
                icon: faUser,
                hasChild: true,
                subItens:[
                    {
                        id: 'morador',
                        title: 'Morador',
                        url: '/cadastro/pessoa/morador' 
                    },
                    {
                        id: 'visitante',
                        title: 'Visitante',
                        url: '/cadastro/pessoa/visitante' 
                    },
                    {
                        id: 'veiculo',
                        title: 'Veículo',
                        url: '/cadastro/pessoa/veiculo' 
                    },
                    {
                        id: 'funcionarios',
                        title: 'Funcionários',
                        url: '/cadastro/pessoa/funcionarios' 
                    },
                    {
                        id: 'Perfil',
                        title: 'Perfil',
                        url: '/cadastro/pessoa/perfil' 
                    }
                ]
            },
            {
                id: 'nav-terceiros',
                title: 'Terceiros',
                url: '/cadastro/terceiros',
                icon: faUserGroup,
                hasChild: true,
                subItens:[
                    {
                        id: 'empresa',
                        title: 'Empresa',
                        url: '/cadastro/terceiros/empresa' 
                    },
                    {
                        id: 'pessoaFisica',
                        title: 'Pessoa Física',
                        url: '/cadastro/terceiros/pessoa-fisica' 
                    }
                ]
            },
            {
                id: 'nav-apartamento',
                title: 'Apartamento',
                url: '/cadastro/apartamento',
                icon: faBuilding,
                hasChild: true,
                subItens:[
                    {
                        id: 'moradia',
                        title: 'Moradia',
                        url: '/cadastro/apartamento/moradia' 
                    },
                    {
                        id: 'moveis',
                        title: 'Móveis',
                        url: '/cadastro/apartamento/moveis' 
                    },
                    {
                        id: 'cartoes',
                        title: 'Cartões',
                        url: '/cadastro/apartamento/cartoes' 
                    }
                ]
            }
        ]
    },
    {
        id: 'nav-acoes',
        title: 'Ações',
        url: '/acoes',
        icon: faHandPointer,
        itens:[
            {
                id: 'nav-chat-moradores',
                title: 'Chat moradores',
                url: '/acoes/chat-moradores',
                icon: faCommentDots,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-solicitacao-bloqueio',
                title: 'Solicitações de bloqueio',
                url: '/acoes/solicitacoes-bloqueio',
                icon: faBan,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-registro-entrada',
                title: 'Registro de entrada',
                url: '/acoes/registro-entrada',
                icon: faRoadBarrier,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-registro-saida',
                title: 'Registro de saída',
                url: '/acoes/registro-saida',
                icon: faRightFromBracket,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-solicitacao-servicos',
                title: 'Solicitação de Serviços',
                url: '/acoes/solicitacao-servicos',
                icon: faClipboardList,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-avaliacao',
                title: 'Avaliação',
                url: '/acoes/avaliacao',
                icon: faRankingStar,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-alteracao-cadastro',
                title: 'Alteração de cadastro',
                url: '/acoes/alteracao-cadastro',
                icon: faUserPen,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-reiniciar-sistema',
                title: 'Reiniciar sistema',
                url: '/acoes/reiniciar-sistema',
                icon: faArrowsRotate,
                hasChild: false,
                subItens:[]
            }
    ]
    },
    {
        id: 'nav-controladora',
        title: 'Controladora',
        url: '/controladora',
        icon: faGear,
        itens:[
            {
                
                id: 'nav-morador',
                title: 'Morador',
                url: '/controladora/morador',
                icon: faHouseUser,
                hasChild: true,
                subItens:[
                    {
                        id: 'controlador-entrada-morador',
                        title: 'Controlador de entrada',
                        url: '/controladora/morador/entrada' 
                    },
                    {
                        id: 'controlador-saida-morador',
                        title: 'Controlador de saída',
                        url: '/controladora/morador/saida' 
                    },
                    {
                        id: 'controlador-entrada-saida-morador',
                        title: 'Controlador de entrada e saída',
                        url: '/controladora/morador/entrada-saida' 
                    }
                ]
            },
            {
                
                id: 'nav-visitante',
                title: 'Visitante',
                url: '/controladora/visitante',
                icon: faAddressBook,
                hasChild: true,
                subItens:[
                    {
                        id: 'controlador-entrada-visitante',
                        title: 'Controlador de entrada',
                        url: '/controladora/visitante/entrada' 
                    },
                    {
                        id: 'controlador-saida-visitante',
                        title: 'Controlador de saída',
                        url: '/controladora/visitante/saida' 
                    },
                    {
                        id: 'controlador-entrada-saida-visitante',
                        title: 'Controlador de entrada e saída',
                        url: '/controladora/visitante/entrada-saida' 
                    }
                ]
            },
            {
                
                id: 'nav-funcionario',
                title: 'Funcionário',
                url: '/controladora/funcionario',
                icon: faUserTie,
                hasChild: true,
                subItens:[
                    {
                        id: 'controlador-entrada-funcionario',
                        title: 'Controlador de entrada',
                        url: '/controladora/funcionario/entrada' 
                    },
                    {
                        id: 'controlador-saida-funcionario',
                        title: 'Controlador de saída',
                        url: '/controladora/funcionario/saida' 
                    },
                    {
                        id: 'controlador-entrada-saida-funcionario',
                        title: 'Controlador de entrada e saída',
                        url: '/controladora/funcionario/entrada-saida' 
                    }
                ]
            },
            {
                
                id: 'nav-veiculo',
                title: 'Veículo',
                url: '/controladora/veiculo',
                icon: faCar,
                hasChild: true,
                subItens:[
                    {
                        id: 'controlador-entrada-veiculo',
                        title: 'Controlador de entrada',
                        url: '/controladora/veiculo/entrada' 
                    },
                    {
                        id: 'controlador-saida-veiculo',
                        title: 'Controlador de saída',
                        url: '/controladora/veiculo/saida' 
                    },
                    {
                        id: 'controlador-entrada-saida-veiculo',
                        title: 'Controlador de entrada e saída',
                        url: '/controladora/veiculo/entrada-saida' 
                    }
                ]
            },
        ]
    },
    {
        id: 'nav-visita',
        title: 'Visita',
        url: '/visita',
        icon: faPerson,
        itens:[
            {
                id: 'nav-visitantes',
                title: 'Visitantes',
                url: '/visita/visitantes',
                icon: faUsers,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-bloquados',
                title: 'Bloqueados',
                url: '/visita/bloqueados',
                icon: faUsersSlash,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-entrada-saida',
                title: 'Controle de entrada e saída',
                url: '/visita/entrada-saida',
                icon: faPersonMilitaryToPerson,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-avaliacao-visitante',
                title: 'Avaliação visitantes',
                url: '/visita/avaliacao-visitantes',
                icon: faRankingStar,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-acoes-visitantes',
                title: 'Ações visitantes',
                url: '/visita/acoes-visitantes',
                icon: faHandPointRight,
                hasChild: false,
                subItens:[]
            },
            {
                id: 'nav-auditoria-visitante',
                title: 'Auditoria de visitantes',
                url: '/visita/auditoria-visitantes',
                icon: faFileCircleCheck,
                hasChild: false,
                subItens:[]
            }
        ]
    },
    {
        id: 'nav-relatorios',
        title: 'Relatórios',
        active: false,
        url: '/relatorios',
        icon: faFileLines,
        itens:[
            {
                
                id: 'nav-cadastros',
                title: 'Cadastros',
                url: '/relatorios/cadastros',
                icon: faFilePen,
                hasChild: true,
                subItens:[
                    {
                        id: 'cadastros-pessoa',
                        title: 'Pessoa',
                        url: '/relatorios/cadastros/pessoa' 
                    },
                    {
                        id: 'cadastros-apartamento',
                        title: 'Apartamento',
                        url: '/relatorios/cadastros/apartamento' 
                    }
                ]
            },
            {
                
                id: 'nav-acessos',
                title: 'Acessos',
                url: '/relatorios/acessos',
                icon: faKey,
                hasChild: true,
                subItens:[
                    {
                        id: 'cadastros-pessoa',
                        title: 'Perfil com acessos',
                        url: '/relatorios/acessos/perfil' 
                    }
                ]
            },
            {
                
                id: 'nav-registros',
                title: 'Registros',
                url: '/relatorios/registros',
                icon: faGear,
                hasChild: true,
                subItens:[
                    {
                        id: 'registro-entradas',
                        title: 'Controle de entradas',
                        url: '/relatorios/registros/entradas' 
                    },
                    {
                        id: 'registro-saidas',
                        title: 'Controle de saídas',
                        url: '/relatorios/registros/saidas' 
                    }
                ]
            }
        ]
    }
    ];

    constructor(){

    }  

    getNavigationMenu(): NavigationItem[]{
        return this.navigationItems;
    }
    
}