import * as ko from 'knockout';

interface Gift {
    name: string;
    price: string;
}

export class GiftModel {
    gifts: KnockoutObservableArray<Gift>;
    addGift: () => void;
    removeGift: (gift: Gift) => void;
    // tslint:disable-next-line:no-any
    save: (form: any) => void;
    // tslint:disable-next-line:no-any
    constructor(gifts: any) {
        // tslint:disable-next-line:no-console
        console.log(gifts);
        const _t: GiftModel = this;
        _t.gifts = ko.observableArray(gifts);
        _t.addGift = () => {
            _t.gifts.push({
                name: '',
                price: ''
            });
        };
        _t.removeGift = (gift: Gift) => {
            _t.gifts.remove(gift);
        };

        // tslint:disable-next-line:no-any
        _t.save = (form: any) => {
            alert('Could now transmit to server: ' + ko.utils.stringifyJson(_t.gifts));
            // To actually transmit to server as a regular form post, 
            // write this: ko.utils.postJson($("form")[0], self.gifts);
            ko.utils.postJson($('form')[0], _t.gifts, null);
        };
    }
}