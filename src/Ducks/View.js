const initialState = {
    showAllMutualFunds: false,
    sidebarExpanded : true,
    showMutualFundSummary: false,
    showLoginView : true,
    showUserFunds : false,
    showNavHistoryView: false,
    user : {
        email : "",
        firstName : "",
        lastName : ""
    },
    activeMutualFundIndex : 0,
    mutualFunds : [],
    mutualFundSumaryIndex : 0
};

export const actions = {
    sideBarToggled : () => ({
        type : 'SIDEBAR_BUTTON_TOGGLED'
    }),

    loginSuccess : (user) => ({
        type : 'LOGIN_SUCCESS',
        user
    }),

    activeMutualFundChanged : (index) => ({
        type : 'MUTUAL_FUND_CHANGE',
        index
    }),

    mutualFundDataFetched : (mutualFunds) => ({
        type : 'MUTUAL_FUNDS_FETCHED',
        mutualFunds
    }),

    showMutualFundSummary : (index) => ({
        type : 'MUTUAL_FUND_SUMMARY',
        index
    }),

    backButtonClickedFromSummary : (index) => ({
        type : 'BACK_BUTTON_CLICKED_FROM_SUMMARY',
        index
    }),

    userFundsSelected : () => ({
        type : 'USER_FUNDS',
    }),

    navHistoryViewSelected : () => ({
        type : 'NAV_HISTORY_VIEW',
    }),

    summaryFromNavHistory : () => ({
        type : 'NAV_HISTORY_VIEW_BACK'
    })
};

const sideBarToggled = (state) => ({
        ...state,
        sidebarExpanded : !state.sidebarExpanded
    });

const loginSuccess = (state, action) => ({
        ...state,
        user : action.user,
        showAllMutualFunds : true,
        showLoginView : false
    });

const activeMutualFundChanged = (state, action) => ({
        ...state,
        activeMutualFundIndex : action.index
    });

const mutualFundDataFetched = (state, action) => ({
    ...state,
    mutualFunds : action.mutualFunds
});

const showMutualFundSummary = (state, action) => ({
    ...state,
    showMutualFundSummary: true,
    showAllMutualFunds: false,
    mutualFundSumaryIndex: action.index
});

const showMutualFundSummaryFromNavHistory = (state) => ({
    ...state,
    showMutualFundSummary: true,
    showNavHistoryView: false,
});


const backButtonClickedFromSummary = (state, action) => ({
    ...state,
    showMutualFundSummary: false,
    showAllMutualFunds: true,
    showUserFunds : false,
    mutualFundSumaryIndex: action.index || 0
});

const userFundsSelected = (state) => ({
    ...state,
    showAllMutualFunds: false,
    showUserFunds : true
});

const showNavHistoryView = (state) => ({
    ...state,
    showNavHistoryView : true,
    showMutualFundSummary: false,
})

const handler = {
    ['SIDEBAR_BUTTON_TOGGLED'] : sideBarToggled,
    ['LOGIN_SUCCESS'] : loginSuccess,
    ['MUTUAL_FUND_CHANGE'] :activeMutualFundChanged,
    ['MUTUAL_FUNDS_FETCHED'] : mutualFundDataFetched,
    ['MUTUAL_FUND_SUMMARY'] : showMutualFundSummary,
    ['BACK_BUTTON_CLICKED_FROM_SUMMARY'] : backButtonClickedFromSummary,
    ['USER_FUNDS'] : userFundsSelected,
    ['NAV_HISTORY_VIEW'] : showNavHistoryView,
    ['NAV_HISTORY_VIEW_BACK'] : showMutualFundSummaryFromNavHistory
};

const toggleView = (state = initialState, action ={}) => (handler[action.type] ? handler[action.type](state, action) : state)
export default toggleView;