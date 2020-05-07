import { DeepPartial } from '@sensenet/client-utils'

const values: DeepPartial<typeof import('./default').default> = {
  addButton: {
    new: 'Új...',
    addNew: 'Új hozzáadása',
    tooltip: 'Tartalom létrehozása vagy feltöltése',
    upload: 'Feltöltés',
    dialogTitle: 'Új {0} létrehozása',
  },
  commandPalette: {
    title: 'Command palette megnyitása',
  },
  contentInfoDialog: {
    dialogTitle: '{0} tulajdonságai',
    type: 'Típus',
    owner: 'Tulajdonos',
    path: 'Elérési út',
    created: 'Létrehozva',
    unknownOwner: 'Ismeretlen',
  },
  deleteContentDialog: {
    dialogTitle: 'Tényleg törlöd?',
    dialogContent: 'Az alábbi tartalmak törlésére készülsz:',
    permanentlyLabel: 'Véglegesen',
    permanentlyHint: 'A tartalom nem kerül a kukába, rögtön törlődik',
    deletingContent: 'Törlés folyamatban...',
    deleteButton: 'Törlés',
    cancelButton: 'Mégsem',
  },
  copyMoveContentDialog: {
    copy: {
      title: `'{0}' másolása ide: '{1}' `,
      inProgress: 'Másolás folyamatban...',
      titleMultiple: `{0} content másolása ide: '{1}'`,
      copyButton: 'Másolás',
      cancelButton: 'Mégsem',
      copySucceededNotification: '{0} másolása megtörtént ide: {1}',
      copyMultipleSucceededNotification: '{0} content másolása megörtént ide: {1}',
      copyFailedNotification: 'Nem sikerült a {0} másolása ide: {1}',
      copyMultipleFailedNotification: 'Nem sikerült {0} content másolása ide: {1}',
    },
    move: {
      title: `'{0}' áthelyezése ide: '{1}'`,
      inProgress: 'Áthelyezés folyamatban...',
      titleMultiple: `{0} content áthelyezése ide: '{1}'`,
      copyButton: 'Áthelyezés',
      cancelButton: 'Mégsem',
      copySucceededNotification: '{0} áthelyezése megtörtént ide: {1}',
      copyMultipleSucceededNotification: '{0} content áthelyezése megtörtént ide: {1}',
      copyFailedNotification: 'Nem sikerült a {0} áthelyezése ide: {1}',
      copyMultipleFailedNotification: 'Nem sikerült {0} content áthelyezése ide: {1}',
    },
  },
  drawer: {
    titles: {
      Content: 'Tartalom',
      Dashboard: 'Irányítópult',
      Search: 'Keresés',
      Setup: 'Beállítás',
      UsersAndGroups: 'Felhasználók és csoportok',
      ContentTypes: 'Tartalom típusok',
      Localization: 'Nyelvi fájlok',
      Query: 'Saját lekérdezésem',
      Trash: 'Kuka',
    },
    descriptions: {
      Content: 'Tartalom böngészése',
      Dashboard:
        'Olyan egyoldalas vizuális felület, amelynek segítségével a felhasználó első ránézésre monitorozhatja legfontosabb céljainak vagy elvárásainak megvalósulását',
      Search: 'Testreszabott keresések futtatása és mentése későbbi használatra',
      Setup: 'A rendszer beállításai',
      UsersAndGroups: 'Felhasználó és csoport kezelése, szerkesztése',
      ContentTypes: 'Tartalom típusok kezelése',
      Localization: 'Nyelvi fájlok kezelése',
      Query: 'Saját lekérdezésem megjelenítése',
      Trash: 'Törölt elemek kezelése',
    },

    personalSettingsTitle: 'Személyes beállítások',
    personalSettingsSecondaryText: 'Az alkalmazás testreszabása',
    newSearch: 'Új keresés indítása',
  },
  editPropertiesDialog: {
    dialogTitle: '{0} tulajdonságainak szerkesztése',
  },
  login: {
    loginTitle: 'Bejelentkezés',
    loginButtonTitle: 'Bejelentkezés',
    greetings: 'Üdvözlet, {0}!',
    loggingInTo: 'Bejelentkezés ide: {0}...',
    loginFailed: 'A bejelentkezés nem sikerült.',
    userNameLabel: 'Felhasználónév',
    userNameHelperText: 'A rendszerben tárolt felhasználónév',
    passwordLabel: 'Jelszó',
    passwordHelperText: 'A felhasználóhoz tartozó jelszó',
    repositoryLabel: 'Elérési út',
    repositoryHelperText: 'A repository teljes elérési útja (pl.: https://my-sensenet.com)',
  },
  logout: {
    logoutCancel: 'Mégsem',
    logoutButtonTitle: 'Kijelentkezés',
    logoutDialogTitle: 'Biztosan kijelentkezel?',
    loggingOutFrom: (repoUrl: string) => `Kijelentkezés a ${repoUrl} repository-ból...`,
    logoutConfirmText: (repoUrl: string, userName: string) =>
      `Jelenleg a ${repoUrl} repository-t használod ${userName} felhasználóval. Biztosan kijelentkezel?`,
  },
  personalSettings: {
    languageTitle: 'A választott nyelv megnevezése',
    themeTitle: 'Sötét vagy világot színséma beállítása',
    commandPaletteTitle: 'Command palette beállításai',
    commandPaletteEnable: 'Command palette engedélyezése vagy tiltása',
    commandPaletteWrapQuery: 'Command palette lekérdezés sablonok beállítása',
    contentTitle: 'Tartalom böngészésére vonatkozó beállítások',
    contentFields: 'Megjelenítendő mezők beállítása',
    contentBrowseType:
      'Böngészés típus kiválasztása: simple (egyszerű), explore (lista és fa) vagy commander (dupla paneles)',
    drawer: 'Oldalsó menüsáv beállításai',
    drawerEnable: 'Menüsáv engedélyezése / tiltása',
    drawerItems: 'Megjelenítendő elemek',
    drawerType: 'Menüsáv típusa: mini-variant (összecsukható), permanent (mindig kibontott), temporary (ideiglenes) ',
    lastRepository: 'A legutóbb használt repository url',
    platformDependentTitle: 'Platform függő beállítások',
    repositoryTitle: 'Repository beállítások',
    repositoryUrl: 'A repository elérési útvonala, pl.: https://my-sensenet-repository.org',
    repositoryLoginName: 'A legutóbb használt bejelentkezési név',
    repositoryDisplayName: 'Egy tetszőleges megjelenítendő név',
  },
  repositorySelector: {
    anotherRepo: 'Másik repository',
    loggedInAs: 'Bejelentkezve mint {0}',
    notLoggedIn: 'Nincs bejelentkezve',
    typeToFilter: 'Kezdj írni a szűréshez...',
  },
  topMenu: {
    personalSettings: 'Személyes beállítások',
    logout: 'Kijelentkezés',
  },
  forms: {
    referencePicker: 'Referencia választó',
    avatarPicker: 'Avatar választó',
    removeAvatar: 'Avatar törlése',
    changeReference: 'Referencia módosítása',
    addReference: 'Referencia hozzáadása',
    ok: 'Ok',
    cancel: 'Vissza',
    upload: 'Feltöltés',
    submit: 'Küldés',
    inputPlaceHolder: 'Új típus hozzáadásához kezdje el gépelni',
    emptyField: '<Ez a mező üres>',
  },
  common: {
    loadingContent: 'Tartalom betöltése...',
  },
  batchActions: {
    delete: 'Kijelölt elemek törlése',
    move: 'Kijelölt elemek áthelyezése',
    copy: 'Kijelölt elemek másolása',
  },
}

export default values
