export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string
          gist_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          gist_id?: string | null
          id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          gist_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_gist_id_fkey"
            columns: ["gist_id"]
            isOneToOne: false
            referencedRelation: "gists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gist_hashtag: {
        Row: {
          gist_id: string
          hashtag_id: string
        }
        Insert: {
          gist_id: string
          hashtag_id: string
        }
        Update: {
          gist_id?: string
          hashtag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gist_hashtag_gist_id_fkey"
            columns: ["gist_id"]
            isOneToOne: false
            referencedRelation: "gists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gist_hashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            isOneToOne: false
            referencedRelation: "hashtags"
            referencedColumns: ["id"]
          },
        ]
      }
      gists: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          profile_id: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "gists_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      hashtags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          gist_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          gist_id: string
          id: string
          user_id: string
        }
        Update: {
          created_at?: string
          gist_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_gist_id_fkey"
            columns: ["gist_id"]
            isOneToOne: false
            referencedRelation: "gists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          id: number
          title: string | null
        }
        Insert: {
          id?: number
          title?: string | null
        }
        Update: {
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      replies: {
        Row: {
          gist_id: string | null
          id: string
          reply_id: string | null
          text: string
          user_id: string
        }
        Insert: {
          gist_id?: string | null
          id: string
          reply_id?: string | null
          text: string
          user_id: string
        }
        Update: {
          gist_id?: string | null
          id?: string
          reply_id?: string | null
          text?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "replies_gist_id_fkey"
            columns: ["gist_id"]
            isOneToOne: false
            referencedRelation: "gists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_reply_id_fkey"
            columns: ["reply_id"]
            isOneToOne: false
            referencedRelation: "replies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
