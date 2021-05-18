import debug from 'debug';
import { createDharmDto } from '../dto/dharm.dto';
import mongooseService from '../../../common/services/mongoose.service';

const log: debug.IDebugger = debug('app:dharm-dao');

class DharmDao {
    Schema = mongooseService.getMongoose().Schema;

    DharmSchema = new this.Schema({
        name: String,
        isDelete: Boolean,
    });

    Dharm = mongooseService.getMongoose().model('Dharm', this.DharmSchema);

    constructor() {
        log('created new intance of DharmDaos')
    }

    async addDharm(dharmFields: createDharmDto) {
        try{
            const dharm = new this.Dharm({
                ...dharmFields,
                isDelete: false,
    
            });
    
            await dharm.save();
            return dharm;

        }catch(e) {
            console.log('error', e);
        }
        
    }


    async getDharmList() {
        try{
            //$match
            // return this.Dharm.aggregate([
            //     {
            //         $match : {
            //             name: 'Hindu'
            //         }
            //     }
            // ])

            //$group
            // return this.Dharm.aggregate([
            //     {
            //         $group: {
            //             _id: '$name',
            //             count: {
            //                 $sum: 1
            //             }
            //         }
            //     }
            // ])
            return this.Dharm.aggregate([
                {
                    $lookup: {
                        from: "jaati",
                        localField: "_id",
                        foreignField: "dharmId",
                        as: "jaati"
                    }
                }
            ])
        } catch(e) {
            console.log('error', e);
        }
    }




}


export default new DharmDao;