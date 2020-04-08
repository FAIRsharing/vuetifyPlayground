export const applicationMixin = {
    data: function () {
        return {
            applicationStrings: {
                connectionErrors: {
                    NOT_FOUND: 'the record you are looking for is not existed',
                    CONNECTION_ERROR: 'There is a connection issue',
                    NO_INTERNET: 'Your internet connection is lost!',
                },
                mainTopNav: {
                    TITLE_1: 'Standard',
                    TITLE_2: 'Policy',
                    TITLE_3: 'Collection',
                    TITLE_4: 'Search',
                }
            },
            get globalReadOnlyProperty() {
                return "Can't change me!";
            },
        }
    }
};