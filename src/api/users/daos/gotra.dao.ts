import debug from 'debug';
import mongooseService from '../../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:dharm-dao');

class Gotra {
    Schema = mongooseService.getMongoose().Schema;

    GotraSchema = new this.Schema({
        gotraId:{ type: this.Schema.Types.ObjectId, ref:'Jaati'},
        dharm: String,
        isDelete: Boolean,
    }, {collection: 'gotra'});

    Gotra = mongooseService.getMongoose().model('Gotra', this.GotraSchema);

    constructor() {
        log('created new intance of DharmDaos')
    }


    async addGotra(gotraFields: any) {
        try{
            const gotra = new this.Gotra({
                ...gotraFields
            });
    
            await gotra.save();
            return gotra;
        }catch(e) {
            console.log('error', e);
        }
    }

}


export default new Gotra;