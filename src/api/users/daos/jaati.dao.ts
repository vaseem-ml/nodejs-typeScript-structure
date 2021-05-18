import debug from 'debug';
import mongooseService from '../../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:dharm-dao');

class JaatiDao {
    Schema = mongooseService.getMongoose().Schema;

    JaatiSchema = new this.Schema({
        dharmId:{ type: this.Schema.Types.ObjectId, ref:'Dharm'},
        name: String,
        isDelete: Boolean,
    }, {collection: 'jaati'});

    Jaati = mongooseService.getMongoose().model('Jaati', this.JaatiSchema);

    constructor() {
        log('created new intance of DharmDaos')
    }


    async addJaati(jaatiFields: any) {
        try{
            const jaati = new this.Jaati({
                ...jaatiFields,
                isDelete: false
            });
    
            await jaati.save();
            return jaati;
        }catch(e) {
            console.log('error', e);
        }
    }

}


export default new JaatiDao;