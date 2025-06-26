import { Button } from '@/components/ui/button'
import { DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import { Label } from '@radix-ui/react-label'
import React, { Dispatch, SetStateAction, useState } from 'react'

type User = {
  id: string;
  username: string | null;
  name: string | null;
  profileImg: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  createAt: string;
  _count: {
    posts: number;
    following: number;
    followers: number;
  }
}

function EditProfileModal({user, showEditDialog, setShowEditDialog}: {user: User, showEditDialog: boolean, setShowEditDialog: Dispatch<SetStateAction<boolean>>}) {
    const [editForm, setEditForm] = useState({
        name: user.name || "",
        bio: user.bio || "",
        location: user.location || "",
        website: user.website || "",

    });

    const handleEditSubmit = async () => {
        console.log("Usuário:", user.username);
        // const formData = new FormData();
        // Object.entries(editForm).forEach(([key, value]) => {
        //   formData.append(key, value);
        // });

        

        // const result = await updateProfile(user.username!, formData);
        // console.log({result})
        // if (result) {
        //   setShowEditDialog(false);
        //   // toast.success("Profile updated successfully");
        // }
    };
  
    return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
            <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
            <div className="space-y-2">
            <Label>Nome</Label>
            <Input
                name="name"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="Teu nome"
            />
            </div>
            <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
                name="bio"
                value={editForm.bio}
                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                className="min-h-[100px]"
                placeholder="Tell us about yourself"
            />
            </div>
            <div className="space-y-2">
            <Label>Localização</Label>
            <Input
                name="location"
                value={editForm.location}
                onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                placeholder="Where are you based?"
            />
            </div>
            <div className="space-y-2">
            <Label>Website</Label>
            <Input
                name="website"
                value={editForm.website}
                onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                placeholder="Your personal website"
            />
            </div>
        </div>
        <div className="flex justify-end gap-3">
            <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button className="cursor-pointer" onClick={handleEditSubmit}>Save Alteração</Button>
        </div>
        </DialogContent>
    </Dialog>
  )
}

export default EditProfileModal