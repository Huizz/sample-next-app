import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import * as EnglishTranslation from './en';
import * as ChineseTranslation from './zh';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);


export const LanguageContext = React.createContext({ language: 'en', updateLanguage: (event: React.ChangeEvent<HTMLSelectElement>) => {}, messages: EnglishTranslation.strings });
export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends React.Component {
    state = {
        language: 'en',
        messages: EnglishTranslation.strings,
    }

    render() {
        return (
            <LanguageContext.Provider value={{ language: this.state.language, updateLanguage: this.updateLanguage, messages: this.state.messages }}>
                <IntlProvider
                    key={this.state.language}
                    locale={this.state.language}
                    messages={this.state.messages}
                    defaultLocale="en"
                >
                    {this.props.children}
                </IntlProvider>
            </LanguageContext.Provider>
        )
    }
    
    updateLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ language: event.target.value })

        switch (event.target.value) {
            case 'en':
                this.setState({ messages: EnglishTranslation.strings });
                break;
            case 'zh':
                this.setState({ messages: ChineseTranslation.strings });
                break;
            default:
                this.setState({ messages: EnglishTranslation.strings });
        }
    }
}

export default LanguageProvider;